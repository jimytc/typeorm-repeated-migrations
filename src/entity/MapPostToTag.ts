import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Tag } from "./Tag";
import { Post } from "./Post";

@Entity('mapPostToTag')
export class MapPostToTag extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'bigint' })
  postId: number;

  @Column({ type: 'bigint' })
  tagId: number;

  @Column()
  order: number;

  @ManyToOne(() => Post, t => t.mapPostToTags)
  post: Post;

  @ManyToOne(() => Tag, t => t.mapPostToTags)
  tag: Tag;
}
