import dataSource from '../../configs/orm.config';

import { applyPagination } from '../../utilities/pagination-filtering.utility';

import { IBaseQueryParams } from 'common.interface';

import { Dua } from '../../entities/dua/dua.entity';

const repository = dataSource.getRepository(Dua);

// const getById = async (id: number): Promise<ICategoryResponse> => {
//   const entity = await repository
//     .createQueryBuilder('dua')
//     .leftJoin('dua.dua', 'dua')
//     .select([
//       'dua.id',
//       'dua.name',
//       'dua.icon',
//       'dua.id',
//       'dua.name',
//     ])
//     .where('dua.id = :id', { id })
//     .getOne();

//   if (!entity) {
//     throw new Error('Category not found');
//   }
//   return toICategoryResponse(entity);
// };

const list = async (params: IBaseQueryParams) => {
  let repo = repository
    .createQueryBuilder('dua')
    .leftJoin("dua.category",'category')
    .leftJoin('category.subCategory', 'subCategory')
    .select([
      'dua.id',
      'dua.dua_name_bn',
      'dua.dua_name_en',
      'dua.top_bn',
      'dua.top_en',
      'dua.dua_arabic',
      'dua.dua_indopak',
      'dua.clean_arabic',
      'dua.transliteration_bn',
      'dua.transliteration_en',
      'dua.translation_bn',
      'dua.translation_en',
      'dua.bottom_bn',
      'dua.bottom_en',
      'dua.bottom_bn',
      'dua.refference_bn',
      'dua.refference_en',
      'dua.audio',
      'category.id',
      'category.cat_name_bn',
      'category.cat_name_en',
      'category.no_of_subcat',
      'category.no_of_dua',
      'category.cat_icon',
      'subCategory.id',
      'subCategory.subcat_name_bn',
      'subCategory.subcat_name_en',
      'subCategory.no_of_dua',
    ]);

  if (params.keyword && params.keyword.trim() !== '') {
    repo = repo.andWhere(
      'dua.dua_name_en LIKE :keyword OR dua.dua_name_bn LIKE :keyword',
      {
        keyword: `%${params.keyword}%`,
      },
    );
  }

  if (params.category) {
    repo = repo.andWhere('category.id = :categoryId', {
      categoryId: params.category,
    });
  }
  
  if (params.subCategory) {
    repo = repo.andWhere('subCategory.id = :subCategoryId', {
      subCategoryId: params.subCategory,
    });
  }
  
  const sortFieldsMap: Record<string, string> = {
    id: 'dua.id',
  };

  if (params.sortBy && sortFieldsMap[params.sortBy]) {
    const sortOrder =
      params.sortOrder?.toUpperCase() === 'DESC' ? 'DESC' : 'ASC';
    repo.orderBy(sortFieldsMap[params.sortBy], sortOrder);
  }

  if (params.pagination === 'true' || params.pagination === 'True') {
    const { repo: paginatedRepo, pagination } = await applyPagination(
      repo,
      params.limit,
      params.page,
    );
    const entities = await paginatedRepo.getMany();
    // const response = entities.map(toICategoryResponse);
    const response = entities;
    return { response, pagination };
  }

  const entities = await repo.getMany();
  // const response = entities.map(toICategoryResponse);
  const response = entities;
  return { response };
};

export default {
  // getById,
  list,
};
