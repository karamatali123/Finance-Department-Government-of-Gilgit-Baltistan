const fs = require("fs").promises;
const path = require("path");
const { v4: uuidv4 } = require("uuid");
const { PrismaClient } = require("@prisma/client");

console.log("Starting script...");
console.log("Current directory:", process.cwd());
console.log("Node version:", process.version);

const prisma = new PrismaClient();

// Test Prisma client immediately
async function testPrisma() {
  try {
    console.log("Testing Prisma connection...");
    await prisma.$connect();
    const result = await prisma.$queryRaw`SELECT 1`;
    console.log("Prisma test query result:", result);
    return true;
  } catch (error) {
    console.error("Prisma test failed:", error);
    return false;
  }
}

// Constants
const BUDGET_BOOKS_DIR = path.join(__dirname, "../public/Budget Books");
const JSON_FILE_PATH = path.join(
  __dirname,
  "../app/annual-budget/booksJson.json"
);

console.log("Script paths:");
console.log("BUDGET_BOOKS_DIR:", BUDGET_BOOKS_DIR);
console.log("JSON_FILE_PATH:", JSON_FILE_PATH);

// Utility functions
async function ensureDirectoryExists(dirPath) {
  try {
    await fs.access(dirPath);
  } catch {
    await fs.mkdir(dirPath, { recursive: true });
    console.log(`Created directory: ${dirPath}`);
  }
}

async function verifyFileExists(filePath) {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

async function getFileStats(filePath) {
  try {
    const stats = await fs.stat(filePath);
    return {
      size: stats.size,
      type: path.extname(filePath).slice(1).toLowerCase(),
    };
  } catch (error) {
    console.error(`Error getting file stats for ${filePath}:`, error);
    throw error;
  }
}

async function processFolder(folderData) {
  if (!prisma) {
    throw new Error("Prisma client not initialized");
  }

  const rootFolderName = folderData.title;
  console.log("\nProcessing root folder:", rootFolderName);

  // Create physical root folder
  const rootFolderPath = path.join(BUDGET_BOOKS_DIR, rootFolderName);
  await ensureDirectoryExists(rootFolderPath);

  // Check if folder exists in database
  const existingFolder = await prisma.budgetFolder.findFirst({
    where: { name: rootFolderName },
  });

  if (existingFolder) {
    console.log(
      `Folder "${rootFolderName}" already exists in database. Skipping...`
    );
    return;
  }

  // Create root folder in database with manual ID
  const rootFolder = await prisma.budgetFolder.create({
    data: {
      id: uuidv4(),
      name: rootFolderName,
      updatedAt: new Date(),
    },
  });
  console.log("Created root folder in database:", rootFolder.name);

  // Process subfolders
  for (const subFolder of folderData.subFolders) {
    console.log(`\nProcessing subfolder: ${subFolder.title}`);

    // Create physical subfolder
    const subFolderPath = path.join(rootFolderPath, subFolder.title);
    await ensureDirectoryExists(subFolderPath);

    // Create subfolder in database with manual ID
    const createdSubFolder = await prisma.budgetFolder.create({
      data: {
        id: uuidv4(),
        name: subFolder.title,
        parentId: rootFolder.id,
        updatedAt: new Date(),
      },
    });
    console.log("Created subfolder in database:", createdSubFolder.name);

    // Process files
    for (const file of subFolder.files) {
      try {
        const filePath = path.join(subFolderPath, file.name);
        const relativePath = path.join(
          "Budget Books",
          rootFolderName,
          subFolder.title,
          file.name
        );

        // Check if file exists
        const fileExists = await verifyFileExists(filePath);
        if (!fileExists) {
          console.warn(`File not found: ${filePath}`);
          continue;
        }

        // Get file stats
        const { size, type } = await getFileStats(filePath);

        // Create database entry with manual ID
        await prisma.budgetDocument.create({
          data: {
            id: uuidv4(),
            title: file.name,
            fileName: file.name,
            filePath: relativePath,
            fileSize: size,
            fileType: type,
            folderId: createdSubFolder.id,
            createdBy: "system",
          },
        });
        console.log("Added document to database:", file.name);
      } catch (fileError) {
        console.error(`Error processing file ${file.name}:`, fileError);
        // Continue with next file
      }
    }
  }
}

async function importBudgetData() {
  console.log("Starting budget data import...");

  // Test Prisma first
  const prismaTest = await testPrisma();
  if (!prismaTest) {
    throw new Error("Prisma connection test failed");
  }

  try {
    // Verify JSON file exists
    const jsonExists = await verifyFileExists(JSON_FILE_PATH);
    if (!jsonExists) {
      throw new Error(`JSON file not found at: ${JSON_FILE_PATH}`);
    }

    // Read and parse JSON
    const jsonContent = await fs.readFile(JSON_FILE_PATH, "utf-8");
    const jsonData = JSON.parse(jsonContent);

    if (!Array.isArray(jsonData) || jsonData.length === 0) {
      throw new Error("Invalid JSON structure: Expected non-empty array");
    }

    // Process each folder in the JSON array
    for (const folderData of jsonData) {
      await processFolder(folderData);
    }

    console.log("\nBudget data import completed successfully!");
    console.log("Total folders processed:", jsonData.length);
  } catch (error) {
    console.error("Fatal error during import:", error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

// Run with proper error handling
(async () => {
  try {
    console.log("Script starting...");
    await importBudgetData();
    console.log("Script completed successfully");
    await prisma.$disconnect();
    process.exit(0);
  } catch (error) {
    console.error("Script failed with error:", error);
    console.error("Error stack:", error.stack);
    if (prisma) {
      await prisma.$disconnect();
    }
    process.exit(1);
  }
})();
