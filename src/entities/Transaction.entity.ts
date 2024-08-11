import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, Relation } from "typeorm";
import { Base } from "./Base.entity.js";
import { Bank } from "./Bank.entity.js";
import { TransactionStatus } from "./TransactionStatus.entity.js";
import { TransactionGroup } from "./TransactionGroup.entity.js";

@Entity('transactions')
export class Transaction extends Base {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  amount: number

  @Column()
  senderAccountName: string

  @Column()
  senderAccountNumber: string

  @Column()
  senderBankId: Relation<Bank>

  @Column()
  transactionStatusId: Relation<TransactionStatus>

  @Column()
  transactionGroupId: Relation<TransactionGroup>

  @ManyToOne(() => Bank, bank => bank)
  @JoinColumn()
  senderBank: Relation<Bank>

  @ManyToOne(() => TransactionStatus, status => status)
  @JoinColumn()
  transactionStatus: Relation<TransactionStatus>

  @ManyToOne(() => TransactionGroup, status => status)
  @JoinColumn()
  transactionGroup: Relation<TransactionGroup>
}