import { BaseEntity, Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Post } from "./Post";
import { PostToTag } from "./PostToTag";

@Entity('tag')
export class Tag extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany(() => Post, t => t.tags)
  @JoinTable()
  posts: Post[];

  @OneToMany(() => PostToTag, (t) => t.tag)
  postToTags: PostToTag[];
}
