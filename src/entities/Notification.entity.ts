import {
  Column, Entity, PrimaryGeneratedColumn
} from "typeorm";
import { Base } from "./Base.entity.js";

@Entity('notifications')
export class Notification extends Base {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ nullable: true })
  name: string

  @Column({ nullable: true })
  content: string
}