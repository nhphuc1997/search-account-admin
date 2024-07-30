import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, Relation } from "typeorm";
import { Base } from "./Base.entity.js";
import { Account } from "./Account.entity.js";

@Entity('transaction_histories')
export class TransactionHistory extends Base {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  amount: number

  @Column()
  status: string

  @Column()
  senderAccountId: Relation<Account>

  @Column()
  retrieverAccountId: Relation<Account>

  @ManyToOne(() => Account, account => account)
  @JoinColumn()
  senderAccount: Relation<Account>

  @ManyToOne(() => Account, account => account)
  @JoinColumn()
  retrieverAccount: Relation<Account>
}