/*
  Warnings:

  - You are about to drop the column `deadline` on the `Job` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Job` DROP COLUMN `deadline`,
    ADD COLUMN `lastDate` DATETIME(3) NULL,
    ADD COLUMN `noOfVacancies` INTEGER NULL,
    MODIFY `company` VARCHAR(191) NULL,
    MODIFY `location` VARCHAR(191) NULL,
    MODIFY `type` VARCHAR(191) NULL,
    MODIFY `salary` VARCHAR(191) NULL,
    MODIFY `description` TEXT NULL,
    MODIFY `requirements` TEXT NULL,
    MODIFY `benefits` TEXT NULL;
