import { MigrationInterface, QueryRunner } from "typeorm";

export class ManytoManyDefineJoiningTableFollowingConvention1616782714748 implements MigrationInterface {
  name = 'ManytoManyDefineJoiningTableFollowingConvention1616782714748'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query("CREATE TABLE `mapPostToTag` (`id` int NOT NULL AUTO_INCREMENT, `postId` int NOT NULL, `tagId` int NOT NULL, `order` int NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
    await queryRunner.query("CREATE TABLE `tag` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
    await queryRunner.query("CREATE TABLE `post` (`id` int NOT NULL AUTO_INCREMENT, `subject` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
    await queryRunner.query("CREATE TABLE `tag_posts_post` (`tagId` int NOT NULL, `postId` int NOT NULL, INDEX `IDX_6c2f3fa276343c3a11f5520cbe` (`tagId`), INDEX `IDX_c43864658728381c39e8df1803` (`postId`), PRIMARY KEY (`tagId`, `postId`)) ENGINE=InnoDB");
    await queryRunner.query("CREATE TABLE `post_tags_tag` (`postId` int NOT NULL, `tagId` int NOT NULL, INDEX `IDX_b651178cc41334544a7a9601c4` (`postId`), INDEX `IDX_41e7626b9cc03c5c65812ae55e` (`tagId`), PRIMARY KEY (`postId`, `tagId`)) ENGINE=InnoDB");
    await queryRunner.query("ALTER TABLE `mapPostToTag` ADD CONSTRAINT `FK_aa89d5067ba2b70a0edcf0652ae` FOREIGN KEY (`postId`) REFERENCES `post`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    await queryRunner.query("ALTER TABLE `mapPostToTag` ADD CONSTRAINT `FK_0559291b35c7cc6e9269608557e` FOREIGN KEY (`tagId`) REFERENCES `tag`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    await queryRunner.query("ALTER TABLE `tag_posts_post` ADD CONSTRAINT `FK_6c2f3fa276343c3a11f5520cbe2` FOREIGN KEY (`tagId`) REFERENCES `tag`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION");
    await queryRunner.query("ALTER TABLE `tag_posts_post` ADD CONSTRAINT `FK_c43864658728381c39e8df18032` FOREIGN KEY (`postId`) REFERENCES `post`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION");
    await queryRunner.query("ALTER TABLE `post_tags_tag` ADD CONSTRAINT `FK_b651178cc41334544a7a9601c45` FOREIGN KEY (`postId`) REFERENCES `post`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION");
    await queryRunner.query("ALTER TABLE `post_tags_tag` ADD CONSTRAINT `FK_41e7626b9cc03c5c65812ae55e8` FOREIGN KEY (`tagId`) REFERENCES `tag`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION");
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query("ALTER TABLE `post_tags_tag` DROP FOREIGN KEY `FK_41e7626b9cc03c5c65812ae55e8`");
    await queryRunner.query("ALTER TABLE `post_tags_tag` DROP FOREIGN KEY `FK_b651178cc41334544a7a9601c45`");
    await queryRunner.query("ALTER TABLE `tag_posts_post` DROP FOREIGN KEY `FK_c43864658728381c39e8df18032`");
    await queryRunner.query("ALTER TABLE `tag_posts_post` DROP FOREIGN KEY `FK_6c2f3fa276343c3a11f5520cbe2`");
    await queryRunner.query("ALTER TABLE `mapPostToTag` DROP FOREIGN KEY `FK_0559291b35c7cc6e9269608557e`");
    await queryRunner.query("ALTER TABLE `mapPostToTag` DROP FOREIGN KEY `FK_aa89d5067ba2b70a0edcf0652ae`");
    await queryRunner.query("DROP INDEX `IDX_41e7626b9cc03c5c65812ae55e` ON `post_tags_tag`");
    await queryRunner.query("DROP INDEX `IDX_b651178cc41334544a7a9601c4` ON `post_tags_tag`");
    await queryRunner.query("DROP TABLE `post_tags_tag`");
    await queryRunner.query("DROP INDEX `IDX_c43864658728381c39e8df1803` ON `tag_posts_post`");
    await queryRunner.query("DROP INDEX `IDX_6c2f3fa276343c3a11f5520cbe` ON `tag_posts_post`");
    await queryRunner.query("DROP TABLE `tag_posts_post`");
    await queryRunner.query("DROP TABLE `post`");
    await queryRunner.query("DROP TABLE `tag`");
    await queryRunner.query("DROP TABLE `mapPostToTag`");
  }

}
