import { ObjectType, Field, ID } from "type-graphql";
import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany
} from "typeorm";
import { AuthorBook } from "./AuthorBook";

@ObjectType()
@Entity()
export class Author extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  name: string;

  @OneToMany(() => AuthorBook, ab => ab.author)
  bookConnection: Promise<AuthorBook[]>;
}
