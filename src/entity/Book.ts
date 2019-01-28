import { ObjectType, Field, ID, Ctx } from "type-graphql";
import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany
} from "typeorm";
import { Author } from "./Author";
import { MyContext } from "../types/MyContext";
import { AuthorBook } from "./AuthorBook";

@ObjectType()
@Entity()
export class Book extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  name: string;

  @OneToMany(() => AuthorBook, ab => ab.book)
  authorConnection: Promise<AuthorBook[]>;

  @Field(() => [Author])
  async authors(@Ctx() { authorsLoader }: MyContext): Promise<Author[]> {
    return authorsLoader.load(this.id);
  }
}
