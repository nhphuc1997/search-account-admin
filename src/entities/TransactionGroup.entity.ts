import {
  Column, Entity, PrimaryGeneratedColumn
} from "typeorm";
import { Base } from "./Base.entity.js";

@Entity('transaction_groups')
export class TransactionGroup extends Base {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ nullable: false })
  name: string
}