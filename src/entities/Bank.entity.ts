import {
  Column, Entity, PrimaryGeneratedColumn
} from "typeorm";
import { Base } from "./Base.entity.js";

@Entity('banks')
export class Bank extends Base {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ nullable: true })
  name: string
}