import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, Relation } from "typeorm";
import { Base } from "./Base.entity.js";
import { Bank } from "./Bank.entity.js";

@Entity('accounts')
export class Account extends Base {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ nullable: false })
  accountDigit: string

  @Column({ nullable: false })
  phoneNumber: string

  @Column({ nullable: false })
  idCard: string

  @Column({ nullable: false })
  accountName: string

  @Column({ nullable: false })
  amountLocked: string

  @Column()
  bankId: Relation<Bank>

  @ManyToOne(() => Bank)
  @JoinColumn()
  bank: Relation<Bank>
}