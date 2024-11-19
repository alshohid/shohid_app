-- CreateTable
CREATE TABLE `AllImage` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `blogImg` VARCHAR(300) NULL,
    `aboutImg` VARCHAR(300) NULL,
    `contactImg` VARCHAR(300) NULL,
    `homeImg` VARCHAR(300) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
