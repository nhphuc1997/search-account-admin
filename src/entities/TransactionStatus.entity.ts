import {
  Column, Entity, PrimaryGeneratedColumn
} from "typeorm";
import { Base } from "./Base.entity.js";

@Entity('transaction_status')
export class TransactionStatus extends Base {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ nullable: false })
  name: string
}