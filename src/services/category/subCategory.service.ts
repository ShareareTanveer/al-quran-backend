import dataSource from '../../configs/orm.config';
import { SubCategory } from '../../entities/category/subCategory.entity';
import { applyPagination } from '../../utilities/pagination-filtering.utility';
import { ISubCategoryResponse } from 'category/subCategory.interface';
import { IBaseQueryParams } from 'common.interface';
import { toISubCategoryResponse } from './mapper/subCategory.mapper';

const repository = dataSource.getRepository(SubCategory);

const getById = async (id: number): Promise<ISubCategoryResponse> => {
  const entity = await repository
    .createQueryBuilder('subCategory')
    .leftJoinAndSelect('subCategory.category', 'category')
    .leftJoinAndSelect('subCategory.duas', 'dua')
    .select([
      'subCategory.id',
      'subCategory.subcat_name_bn',
      'subCategory.subcat_name_en',
      'subCategory.no_of_dua',
      'category.id',
      'category.cat_name_bn',
      'category.cat_name_en',
      'dua.id',
      'dua.dua_name_bn',
      'dua.dua_name_en',
    ])
    .where('subCategory.id = :id', { id })
    .getOne();

  if (!entity) {
    throw new Error('SubCategory not found');
  }
  return toISubCategoryResponse(entity);
};

const list = async (params: IBaseQueryParams) => {
  let repo = repository
    .createQueryBuilder('subCategory')
    .leftJoinAndSelect('subCategory.category', 'category')
    .select([
      'subCategory.id',
      'subCategory.subcat_name_bn',
      'subCategory.subcat_name_en',
      'subCategory.no_of_dua',
      'category.id',
      'category.cat_name_bn',
      'category.cat_name_en',
    ]);

  // Keyword-based filtering
  if (params.keyword && params.keyword.trim() !== '') {
    repo = repo.where(
      'subCategory.subcat_name_en LIKE :keyword OR category.cat_name_en LIKE :keyword',
      {
        keyword: `%${params.keyword}%`,
      },
    );
  }

  // Sorting
  const sortFieldsMap: Record<string, string> = {
    id: 'subCategory.id',
    name: 'subCategory.subcat_name_en',
  };

  if (params.sortBy && sortFieldsMap[params.sortBy]) {
    const sortOrder =
      params.sortOrder?.toUpperCase() === 'DESC' ? 'DESC' : 'ASC';
    repo.orderBy(sortFieldsMap[params.sortBy], sortOrder);
  }

  // Pagination
  if (params.pagination === 'true' || params.pagination === 'True') {
    const { repo: paginatedRepo, pagination } = await applyPagination(
      repo,
      params.limit,
      params.page,
    );
    const entities = await paginatedRepo.getMany();
    const response = entities.map(toISubCategoryResponse);
    return { response, pagination };
  }

  const entities = await repo.getMany();
  const response = entities.map(toISubCategoryResponse);
  return { response };
};

export default {
  getById,
  list,
};
