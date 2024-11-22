import httpStatusCodes from 'http-status-codes';
import IController from '../../interfaces/IController';
import ApiResponse from '../../utilities/api-response.utility';
import service from '../../services/dua/dua.service';
import ApiUtility from '../../utilities/api.utility';
import { IBaseQueryParams } from 'common.interface';


const list: IController = async (req, res) => {
  try {
    const pagination = ApiUtility.getQueryParam(req, 'pagination');
    const limit = ApiUtility.getQueryParam(req, 'limit');
    const page = ApiUtility.getQueryParam(req, 'page');
    const keyword = ApiUtility.getQueryParam(req, 'keyword');
    const sortOrder = ApiUtility.getQueryParam(req, 'sortOrder');
    const sortBy = ApiUtility.getQueryParam(req, 'sortBy');
    const category = ApiUtility.getQueryParam(req, 'category');
    const subCategory = ApiUtility.getQueryParam(req, 'subCategory');
    const params: IBaseQueryParams = {
      pagination,
      limit,
      page,
      keyword,
      sortOrder,
      sortBy,
      category,
      subCategory,
    };
    const data = await service.list(params);
    return ApiResponse.result(
      res,
      data,
      httpStatusCodes.OK,
      null,
      data.pagination,
    );
  } catch (e) {
    return ApiResponse.error(
      res,
      httpStatusCodes.BAD_REQUEST,
      e.message,
    );
  }
};

export default {
  list,

};
