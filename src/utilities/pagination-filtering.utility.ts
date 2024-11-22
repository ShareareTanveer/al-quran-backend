import { SelectQueryBuilder } from 'typeorm';
import ApiUtility from './api.utility';

export const applyPagination = async <Entity>(
  repo: SelectQueryBuilder<Entity>,
  limit?: number,
  page?: number,
): Promise<{ repo: SelectQueryBuilder<Entity>; pagination: any }> => {
  if (limit && page !== undefined) {
    const total = await repo.getCount();
    const pagRes = ApiUtility.getPagination(total, limit, page);
    repo = repo.limit(limit).offset(ApiUtility.getOffset(limit, page));
    return { repo, pagination: pagRes.pagination };
  }
  return { repo, pagination: null };
};

