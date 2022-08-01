/*
  Warnings:

  - You are about to drop the `Game` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `Game` DROP FOREIGN KEY `Game_opponentId_fkey`;

-- DropForeignKey
ALTER TABLE `Game` DROP FOREIGN KEY `Game_uid_fkey`;

-- DropForeignKey
ALTER TABLE `Game` DROP FOREIGN KEY `Game_winnerId_fkey`;

-- DropTable
DROP TABLE `Game`;

-- CreateTable
CREATE TABLE `games` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `status` ENUM('PENDING', 'ACTIVE', 'FINISHED') NOT NULL DEFAULT 'PENDING',
    `uid` VARCHAR(191) NOT NULL,
    `opponentId` VARCHAR(191) NULL,
    `winnerId` VARCHAR(191) NULL,
    `ownerSymbol` BOOLEAN NOT NULL,
    `board` JSON NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `games` ADD CONSTRAINT `games_uid_fkey` FOREIGN KEY (`uid`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `games` ADD CONSTRAINT `games_opponentId_fkey` FOREIGN KEY (`opponentId`) REFERENCES `users`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `games` ADD CONSTRAINT `games_winnerId_fkey` FOREIGN KEY (`winnerId`) REFERENCES `users`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
