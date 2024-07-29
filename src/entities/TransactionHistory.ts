import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, Relation } from "typeorm";
import { Base } from "./Base.entity.js";
import { Account } from "./Account.entity.js";

@Entity('transaction_histories')
export class TransactionHistory extends Base {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ type: Number })
  amount: Number

  @Column({ type: String })
  status: String

  @Column()
  accountId: Relation<Account>

  @ManyToOne(() => Account)
  @JoinColumn()
  account: Relation<Account>
}