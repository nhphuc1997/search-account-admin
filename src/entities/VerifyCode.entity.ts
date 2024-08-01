import {
  Column, Entity, PrimaryGeneratedColumn
} from "typeorm";
import { Base } from "./Base.entity.js";

@Entity('verify_codes')
export class VerifyCode extends Base {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ nullable: false })
  code: string
}