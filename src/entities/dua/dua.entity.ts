import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Category } from '../category/category.entity';
import { SubCategory } from '../category/subCategory.entity';

@Entity('dua')
export class Dua {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'integer' })
  dua_id: number;

  @Column({ type: 'text', nullable: true })
  dua_name_bn: string;

  @Column({ type: 'text', nullable: true })
  dua_name_en: string;

  @Column({ type: 'text', nullable: true })
  top_bn: string;

  @Column({ type: 'text', nullable: true })
  top_en: string;

  @Column({ type: 'text', nullable: true })
  dua_arabic: string;

  @Column({ type: 'text', nullable: true })
  dua_indopak: string;

  @Column({ type: 'text', nullable: true })
  clean_arabic: string;

  @Column({ type: 'text', nullable: true })
  transliteration_bn: string;

  @Column({ type: 'text', nullable: true })
  transliteration_en: string;

  @Column({ type: 'text', nullable: true })
  translation_bn: string;

  @Column({ type: 'text', nullable: true })
  translation_en: string;

  @Column({ type: 'text', nullable: true })
  bottom_bn: string;

  @Column({ type: 'text', nullable: true })
  bottom_en: string;

  @Column({ type: 'text', nullable: true })
  refference_bn: string;

  @Column({ type: 'text', nullable: true })
  refference_en: string;

  @Column({ type: 'text', nullable: true })
  audio: string;

  @ManyToOne(() => Category, (category) => category.duas, {
    nullable: false,
    cascade: true,
  })
  category: Category;

  @ManyToOne(() => SubCategory, (subCategory) => subCategory.duas, {
    nullable: false,
    cascade: true,
  })
  subCategory: SubCategory;
}
