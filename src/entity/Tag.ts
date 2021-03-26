import { BaseEntity, Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Post } from "./Post";
import { MapPostToTag } from "./MapPostToTag";

@Entity('tag')
export class Tag extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany(() => Post, t => t.tags)
  @JoinTable({ name: 'mapPostToTag' })
  posts: Post[];

  @OneToMany(() => MapPostToTag, (t) => t.tag)
  mapPostToTags: MapPostToTag[];
}
