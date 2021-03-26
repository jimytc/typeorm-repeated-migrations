import { BaseEntity, Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Tag } from "./Tag";
import { MapPostToTag } from "./MapPostToTag";

@Entity('post')
export class Post extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  subject: string;

  @ManyToMany(() => Tag, t => t.posts)
  @JoinTable({ name: 'mapPostToTag' })
  tags: Tag[];

  @OneToMany(() => MapPostToTag, (t) => t.post)
  mapPostToTags: MapPostToTag[];
}
