import { BaseEntity, Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Tag } from "./Tag";

@Entity('post')
export class Post extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  subject: string;

  @ManyToMany(() => Tag, t => t.posts)
  @JoinTable()
  tags: Tag[];
}
