import { ICategoryResponse } from "category/category.interface";
import { Category } from "../../../entities/category/category.entity";
import { toISubCategoryResponse } from "./subCategory.mapper";

export const toICategoryResponse = (
  entity: Category,
): ICategoryResponse => {
  return {
    id: entity.id,
    // cat_id: entity.cat_id,
    cat_name_bn: entity.cat_name_bn,
    cat_name_en: entity.cat_name_en,
    no_of_subcat: entity.no_of_subcat,
    no_of_dua: entity.no_of_dua,
    cat_icon: entity.cat_icon,
    subCategory:
      entity?.subCategory?.map((subCategory) => toISubCategoryResponse(subCategory)) || [],
  };
};
