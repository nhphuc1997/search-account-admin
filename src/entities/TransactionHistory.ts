import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, Relation } from "typeorm";
import { Base } from "./Base.entity.js";
import { Account } from "./Account.entity.js";
import { Bank } from "./Bank.entity.js";

@Entity('transaction_histories')
export class TransactionHistory extends Base {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  amount: number

  @Column()
  status: string

  @Column()
  senderAccountName: string

  @Column()
  senderAccountNumber: string

  @Column()
  senderBankId: Relation<Bank>

  @Column()
  retrieverAccountId: Relation<Account>

  @ManyToOne(() => Account, account => account)
  @JoinColumn()
  retrieverAccount: Relation<Account>

  @ManyToOne(() => Bank, bank => bank)
  @JoinColumn()
  senderBank: Relation<Bank>
}