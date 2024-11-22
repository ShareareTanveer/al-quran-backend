import { IDuaResponse } from "dua/dua.interface";
import { Dua } from "../../../entities/dua/dua.entity";
import { toISubCategoryResponse } from "../../../services/category/mapper/subCategory.mapper";
import { toICategoryResponse } from "../../../services/category/mapper/category.mapper";

export const toIDuaResponse = (
  entity: Dua,
): IDuaResponse => {
  return {
    id: entity.id,
    dua_id: entity.dua_id,
    dua_name_bn: entity.dua_name_bn,
    dua_name_en: entity.dua_name_en,
    top_bn: entity.top_bn,
    top_en: entity.top_en,
    dua_arabic: entity.dua_arabic,
    dua_indopak: entity.dua_indopak,
    clean_arabic: entity.clean_arabic,
    transliteration_bn: entity.transliteration_bn,
    transliteration_en: entity.transliteration_en,
    translation_bn: entity.translation_bn,
    translation_en: entity.translation_en,
    bottom_bn: entity.bottom_bn,
    bottom_en: entity.bottom_en,
    refference_bn: entity.refference_bn,
    refference_en: entity.refference_en,
    audio: entity.audio,
    category:  toICategoryResponse(entity.category),
    subCategory: toISubCategoryResponse(entity.subCategory),
  };
};
