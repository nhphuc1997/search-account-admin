import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, Relation } from "typeorm";
import { Base } from "./Base.entity.js";
import { Bank } from "./Bank.entity.js";
import { Warning } from "./Warning.entity.js";
import { Notification } from "./Notification.entity.js";

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

  @Column()
  warningId: Relation<Warning>

  @Column()
  notificationId: Relation<Notification>

  @ManyToOne(() => Bank)
  @JoinColumn()
  bank: Relation<Bank>

  @ManyToOne(() => Warning)
  @JoinColumn()
  warning: Relation<Warning>

  @ManyToOne(() => Notification)
  @JoinColumn()
  notification: Relation<Notification>
}