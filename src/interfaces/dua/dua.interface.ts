import { ICategoryResponse } from "category/category.interface";
import { ISubCategoryResponse } from "category/subCategory.interface";


export interface IDuaResponse {
  id: number;
  dua_id: number;
  dua_name_bn?: string;
  dua_name_en?: string;
  top_bn?: string;
  topEn?: string;
  top_en?: string;
  dua_arabic?: string;
  dua_indopak?: string;
  clean_arabic?: string;
  transliteration_bn?: string;
  transliteration_en?: string;
  translation_bn?: string;
  translation_en?: string;
  bottom_bn?: string;
  bottom_en?: string;
  refference_bn?: string;
  refference_en?: string;
  audio?: string;
  category?: ICategoryResponse;
  subCategory?: ISubCategoryResponse;
}
