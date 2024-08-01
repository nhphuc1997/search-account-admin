import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, Relation } from "typeorm";
import { Base } from "./Base.entity.js";
import { Bank } from "./Bank.entity.js";

@Entity('accounts')
export class Account extends Base {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ nullable: true })
  accountDigit: string

  @Column({ nullable: true })
  phoneNumber: string

  @Column({ nullable: true })
  idCard: string

  @Column({ nullable: true })
  accountName: string

  @Column({ nullable: true })
  amountLocked: string

  @Column({ nullable: true })
  amount: string

  @Column({ nullable: true })
  status: string

  @Column()
  bankId: Relation<Bank>

  @ManyToOne(() => Bank)
  @JoinColumn()
  bank: Relation<Bank>
}