import { BaseEntity, Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Tag } from "./Tag";
import { PostToTag } from "./PostToTag";

@Entity('post')
export class Post extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  subject: string;

  @ManyToMany(() => Tag, t => t.posts)
  @JoinTable()
  tags: Tag[];

  @OneToMany(() => PostToTag, (t) => t.post)
  postToTags: PostToTag[];
}
