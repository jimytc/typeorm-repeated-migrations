import { MigrationInterface, QueryRunner } from "typeorm";

export class ManytoManyWithSpecifiedJoiningTable1616782501884 implements MigrationInterface {
  name = 'ManytoManyWithSpecifiedJoiningTable1616782501884'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query("CREATE TABLE `post` (`id` int NOT NULL AUTO_INCREMENT, `subject` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
    await queryRunner.query("CREATE TABLE `tag` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
    await queryRunner.query("CREATE TABLE `mapPostToTag` (`id` int NOT NULL AUTO_INCREMENT, `postId` int NOT NULL, `tagId` int NOT NULL, `order` int NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
    await queryRunner.query("ALTER TABLE `mapPostToTag` CHANGE `id` `id` int NOT NULL");
    await queryRunner.query("ALTER TABLE `mapPostToTag` DROP PRIMARY KEY");
    await queryRunner.query("ALTER TABLE `mapPostToTag` DROP COLUMN `id`");
    await queryRunner.query("ALTER TABLE `mapPostToTag` DROP COLUMN `order`");
    await queryRunner.query("ALTER TABLE `mapPostToTag` ADD `id` int NOT NULL PRIMARY KEY AUTO_INCREMENT");
    await queryRunner.query("ALTER TABLE `mapPostToTag` ADD `order` int NOT NULL");
    await queryRunner.query("ALTER TABLE `mapPostToTag` CHANGE `id` `id` int NOT NULL");
    await queryRunner.query("ALTER TABLE `mapPostToTag` DROP PRIMARY KEY");
    await queryRunner.query("ALTER TABLE `mapPostToTag` ADD PRIMARY KEY (`postId`, `tagId`)");
    await queryRunner.query("ALTER TABLE `mapPostToTag` CHANGE `id` `id` int NOT NULL AUTO_INCREMENT");
    await queryRunner.query("ALTER TABLE `mapPostToTag` CHANGE `id` `id` int NOT NULL");
    await queryRunner.query("ALTER TABLE `mapPostToTag` DROP PRIMARY KEY");
    await queryRunner.query("ALTER TABLE `mapPostToTag` ADD PRIMARY KEY (`tagId`, `postId`)");
    await queryRunner.query("ALTER TABLE `mapPostToTag` CHANGE `id` `id` int NOT NULL AUTO_INCREMENT");
    await queryRunner.query("ALTER TABLE `mapPostToTag` CHANGE `id` `id` int NOT NULL");
    await queryRunner.query("ALTER TABLE `mapPostToTag` DROP PRIMARY KEY");
    await queryRunner.query("ALTER TABLE `mapPostToTag` ADD PRIMARY KEY (`tagId`, `id`)");
    await queryRunner.query("ALTER TABLE `mapPostToTag` CHANGE `id` `id` int NOT NULL AUTO_INCREMENT");
    await queryRunner.query("ALTER TABLE `mapPostToTag` CHANGE `id` `id` int NOT NULL");
    await queryRunner.query("ALTER TABLE `mapPostToTag` DROP PRIMARY KEY");
    await queryRunner.query("ALTER TABLE `mapPostToTag` ADD PRIMARY KEY (`id`)");
    await queryRunner.query("ALTER TABLE `mapPostToTag` CHANGE `id` `id` int NOT NULL AUTO_INCREMENT");
    await queryRunner.query("ALTER TABLE `mapPostToTag` CHANGE `id` `id` int NOT NULL");
    await queryRunner.query("ALTER TABLE `mapPostToTag` DROP PRIMARY KEY");
    await queryRunner.query("ALTER TABLE `mapPostToTag` ADD PRIMARY KEY (`id`, `postId`)");
    await queryRunner.query("ALTER TABLE `mapPostToTag` CHANGE `id` `id` int NOT NULL AUTO_INCREMENT");
    await queryRunner.query("ALTER TABLE `mapPostToTag` CHANGE `id` `id` int NOT NULL");
    await queryRunner.query("ALTER TABLE `mapPostToTag` DROP PRIMARY KEY");
    await queryRunner.query("ALTER TABLE `mapPostToTag` ADD PRIMARY KEY (`postId`, `id`, `tagId`)");
    await queryRunner.query("ALTER TABLE `mapPostToTag` CHANGE `id` `id` int NOT NULL AUTO_INCREMENT");
    await queryRunner.query("CREATE INDEX `IDX_aa89d5067ba2b70a0edcf0652a` ON `mapPostToTag` (`postId`)");
    await queryRunner.query("CREATE INDEX `IDX_0559291b35c7cc6e9269608557` ON `mapPostToTag` (`tagId`)");
    await queryRunner.query("ALTER TABLE `mapPostToTag` ADD CONSTRAINT `FK_aa89d5067ba2b70a0edcf0652ae` FOREIGN KEY (`postId`) REFERENCES `post`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    await queryRunner.query("ALTER TABLE `mapPostToTag` ADD CONSTRAINT `FK_0559291b35c7cc6e9269608557e` FOREIGN KEY (`tagId`) REFERENCES `tag`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query("ALTER TABLE `mapPostToTag` DROP FOREIGN KEY `FK_0559291b35c7cc6e9269608557e`");
    await queryRunner.query("ALTER TABLE `mapPostToTag` DROP FOREIGN KEY `FK_aa89d5067ba2b70a0edcf0652ae`");
    await queryRunner.query("DROP INDEX `IDX_0559291b35c7cc6e9269608557` ON `mapPostToTag`");
    await queryRunner.query("DROP INDEX `IDX_aa89d5067ba2b70a0edcf0652a` ON `mapPostToTag`");
    await queryRunner.query("ALTER TABLE `mapPostToTag` CHANGE `id` `id` int NOT NULL");
    await queryRunner.query("ALTER TABLE `mapPostToTag` DROP PRIMARY KEY");
    await queryRunner.query("ALTER TABLE `mapPostToTag` ADD PRIMARY KEY (`postId`, `id`)");
    await queryRunner.query("ALTER TABLE `mapPostToTag` CHANGE `id` `id` int NOT NULL AUTO_INCREMENT");
    await queryRunner.query("ALTER TABLE `mapPostToTag` CHANGE `id` `id` int NOT NULL");
    await queryRunner.query("ALTER TABLE `mapPostToTag` DROP PRIMARY KEY");
    await queryRunner.query("ALTER TABLE `mapPostToTag` ADD PRIMARY KEY (`id`)");
    await queryRunner.query("ALTER TABLE `mapPostToTag` CHANGE `id` `id` int NOT NULL AUTO_INCREMENT");
    await queryRunner.query("ALTER TABLE `mapPostToTag` CHANGE `id` `id` int NOT NULL");
    await queryRunner.query("ALTER TABLE `mapPostToTag` DROP PRIMARY KEY");
    await queryRunner.query("ALTER TABLE `mapPostToTag` ADD PRIMARY KEY (`tagId`, `id`)");
    await queryRunner.query("ALTER TABLE `mapPostToTag` CHANGE `id` `id` int NOT NULL AUTO_INCREMENT");
    await queryRunner.query("ALTER TABLE `mapPostToTag` CHANGE `id` `id` int NOT NULL");
    await queryRunner.query("ALTER TABLE `mapPostToTag` DROP PRIMARY KEY");
    await queryRunner.query("ALTER TABLE `mapPostToTag` ADD PRIMARY KEY (`postId`, `tagId`, `id`)");
    await queryRunner.query("ALTER TABLE `mapPostToTag` CHANGE `id` `id` int NOT NULL AUTO_INCREMENT");
    await queryRunner.query("ALTER TABLE `mapPostToTag` CHANGE `id` `id` int NOT NULL");
    await queryRunner.query("ALTER TABLE `mapPostToTag` DROP PRIMARY KEY");
    await queryRunner.query("ALTER TABLE `mapPostToTag` ADD PRIMARY KEY (`postId`, `tagId`, `id`)");
    await queryRunner.query("ALTER TABLE `mapPostToTag` CHANGE `id` `id` int NOT NULL AUTO_INCREMENT");
    await queryRunner.query("ALTER TABLE `mapPostToTag` CHANGE `id` `id` int NOT NULL");
    await queryRunner.query("ALTER TABLE `mapPostToTag` DROP PRIMARY KEY");
    await queryRunner.query("ALTER TABLE `mapPostToTag` ADD PRIMARY KEY (`id`)");
    await queryRunner.query("ALTER TABLE `mapPostToTag` CHANGE `id` `id` int NOT NULL AUTO_INCREMENT");
    await queryRunner.query("ALTER TABLE `mapPostToTag` DROP COLUMN `order`");
    await queryRunner.query("ALTER TABLE `mapPostToTag` DROP COLUMN `id`");
    await queryRunner.query("ALTER TABLE `mapPostToTag` ADD `order` int NOT NULL");
    await queryRunner.query("ALTER TABLE `mapPostToTag` ADD `id` int NOT NULL AUTO_INCREMENT");
    await queryRunner.query("ALTER TABLE `mapPostToTag` ADD PRIMARY KEY (`id`)");
    await queryRunner.query("ALTER TABLE `mapPostToTag` CHANGE `id` `id` int NOT NULL AUTO_INCREMENT");
    await queryRunner.query("DROP TABLE `mapPostToTag`");
    await queryRunner.query("DROP TABLE `tag`");
    await queryRunner.query("DROP TABLE `post`");
  }

}
