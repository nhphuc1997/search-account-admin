import {
  Column, Entity, PrimaryGeneratedColumn
} from "typeorm";
import { Base } from "./Base.entity.js";

@Entity('warnings')
export class Warning extends Base {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ nullable: true })
  content: string
}