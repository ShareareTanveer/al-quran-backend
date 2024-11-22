import { MigrationInterface, QueryRunner } from 'typeorm';

import { categorySeed } from '../seeds/category.seed';
import { subCategorySeed } from '../seeds/subCategory.seed';
import { duaSeed } from '../seeds/dua.seed';


export class InitialSeedData1728298038606
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    const categoryRepo = queryRunner.manager.getRepository('category');
    const subCategoryRepo = queryRunner.manager.getRepository('sub_category');
    const duaRepo = queryRunner.manager.getRepository('dua');

    await categoryRepo.save(categorySeed);
    await subCategoryRepo.save(subCategorySeed);
    await duaRepo.save(duaSeed);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
