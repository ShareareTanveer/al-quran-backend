import { ISubCategoryResponse } from "./subCategory.interface";

export interface ICategoryResponse {
  id: number;
  cat_name_bn?: string;
  cat_name_en?: string;
  no_of_subcat?: number;
  no_of_dua?: number;
  cat_icon?: string;
  subCategory?: ISubCategoryResponse[];
}
