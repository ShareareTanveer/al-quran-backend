import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { SubCategory } from './subCategory.entity';
import { Dua } from '../dua/dua.entity';

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  // @Column({ type: 'integer' })
  // cat_id: number;

  @Column({ type: 'text', nullable: true })
  cat_name_bn: string;

  @Column({ type: 'text', nullable: true })
  cat_name_en: string;

  @Column({ type: 'integer', default: 0 })
  no_of_dua: number;

  @Column({ type: 'integer', default: 0 })
  no_of_subcat: number;

  @Column({ type: 'text', nullable: true })
  cat_icon: string;

  @OneToMany(() => SubCategory, (subCategory) => subCategory.category, {
    onDelete: 'CASCADE',
  })
  @JoinColumn()
  subCategory: SubCategory[];

  @OneToMany(() => Dua, (dua) => dua.category, {
    onDelete: 'CASCADE',
  })
  @JoinColumn()
  duas: Dua[];
}
