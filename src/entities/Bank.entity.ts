import {
  Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn, Relation
} from "typeorm";
import { Base } from "./Base.entity.js";
import { Account } from "./Account.entity.js";

@Entity('banks')
export class Bank extends Base {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ nullable: true })
  name: string

  @OneToMany(() => Account, account => account.bank)
  @JoinColumn()
  accounts: Relation<Account[]>
}