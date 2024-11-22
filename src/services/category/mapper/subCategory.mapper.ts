import { toIDuaResponse } from "../../../services/dua/mapper/dua.mapper";
import { SubCategory } from "../../../entities/category/subCategory.entity";
import { ISubCategoryResponse } from "category/subCategory.interface";
import { toICategoryResponse } from "./category.mapper";


export const toISubCategoryResponse = (
  entity: SubCategory,
): ISubCategoryResponse => {
  return {
    id: entity.id,
    // subcat_id: entity.subcat_id,
    subcat_name_bn: entity.subcat_name_bn,
    subcat_name_en: entity.subcat_name_en,
    no_of_dua: entity.no_of_dua,
    category: toICategoryResponse(entity.category),
    duas: entity?.duas?.map((dua) => toIDuaResponse(dua)) || [],
  };
};
