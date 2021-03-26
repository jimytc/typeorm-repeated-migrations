import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Tag } from "./Tag";
import { Post } from "./Post";

@Entity('mapPostToTag')
export class PostToTag extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'bigint' })
  postId: number;

  @Column({ type: 'bigint' })
  tagId: number;

  @Column()
  order: number;

  @ManyToOne(() => Post, t => t.postToTags)
  post: Post;

  @ManyToOne(() => Tag, t => t.postToTags)
  tag: Tag;
}
