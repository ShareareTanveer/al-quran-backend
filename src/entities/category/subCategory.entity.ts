import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, JoinColumn } from "typeorm";
import { Category } from "./category.entity";
import { Dua } from "../dua/dua.entity";

@Entity()
export class SubCategory {
  @PrimaryGeneratedColumn()
  id: number;

  // @Column({ type: "integer" })
  // subcat_id: number;

  @Column({ type: "text", nullable: true })
  subcat_name_bn: string;

  @Column({ type: "text", nullable: true })
  subcat_name_en: string;

  @Column({ type: "integer", default: 0 })
  no_of_dua: number;

  @ManyToOne(() => Category, (category) => category.subCategory, {
    cascade:true,
  })
  category: Category;

  @OneToMany(() => Dua, (dua) => dua.subCategory, {
    onDelete: 'CASCADE',
  })
  @JoinColumn()
  duas: Dua[];
}
