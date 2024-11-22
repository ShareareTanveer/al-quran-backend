import { IDuaResponse } from "dua/dua.interface";
import { ICategoryResponse } from "./category.interface";

export interface ISubCategoryResponse {
  id: number;
  subcat_name_bn?: string;
  subcat_name_en?: string;
  no_of_dua?: number;
  category?: ICategoryResponse; 
  duas?: IDuaResponse[];
}
