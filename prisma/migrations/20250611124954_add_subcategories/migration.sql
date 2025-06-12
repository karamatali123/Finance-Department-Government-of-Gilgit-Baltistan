-- AlterTable
ALTER TABLE `DownloadCategory` ADD COLUMN `parentId` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `DownloadCategory` ADD CONSTRAINT `DownloadCategory_parentId_fkey` FOREIGN KEY (`parentId`) REFERENCES `DownloadCategory`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
