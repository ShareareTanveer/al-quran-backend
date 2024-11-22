import dataSource from '../../configs/orm.config';

import { Category } from '../../entities/category/category.entity';

import { applyPagination } from '../../utilities/pagination-filtering.utility';

import { IBaseQueryParams } from 'common.interface';
import { ICategoryResponse } from 'category/category.interface';

import { toICategoryResponse } from './mapper/category.mapper';

const repository = dataSource.getRepository(Category);
const getById = async (id: number): Promise<ICategoryResponse> => {
  const entity = await repository
    .createQueryBuilder('category')
    .leftJoin('category.subCategory', 'subCategory')
    .select([
      'category.id',
      'category.name',
      'category.icon',
      'subCategory.id',
      'subCategory.name',
    ])
    .where('category.id = :id', { id })
    .getOne();

  if (!entity) {
    throw new Error('Category not found');
  }
  return toICategoryResponse(entity);
};

const list = async (params: IBaseQueryParams) => {
  let repo = repository
    .createQueryBuilder('category')
    .leftJoin('category.subCategory', 'subCategory')
    .leftJoin('subCategory.duas', 'duas')
    .select([
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
      'duas.id',
      'duas.dua_id',
      'duas.dua_name_bn',
      'duas.dua_name_en',
    ]);

  if (params.keyword && params.keyword.trim() !== '') {
    repo = repo.where(
      'category.cat_name_bn LIKE :keyword OR category.cat_name_en LIKE :keyword',
      {
        keyword: `%${params.keyword}%`,
      },
    );
  }

  const sortFieldsMap: Record<string, string> = {
    id: 'category.id',
    cat_name_bn: 'category.cat_name_bn',
    cat_name_en: 'category.cat_name_en',
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
    const response = entities
    return { response, pagination };
  }

  const entities = await repo.getMany();
  // const response = entities.map(toICategoryResponse);
  const response = entities
  return { entities };
};

export default {
  getById,
  list,
};
