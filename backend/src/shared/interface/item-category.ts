import { Item } from './item';

// 物品分类表
export interface ItemCategory {
  categoryID: string;
  categoryName: string;
  itemIDs: Item['itemID'][];
}

// ItemCategoryService 接口定义了 CRUD 操作
export interface ItemCategoryServiceInterface {
  // 创建一个新的物品分类
  createItemCategory(itemCategory: ItemCategory): Promise<ItemCategory>;

  // 获取所有物品分类
  getAllItemCategories(): Promise<ItemCategory[]>;

  // 根据分类ID获取物品分类
  getItemCategoryById(categoryId: string): Promise<ItemCategory | null>;

  // 更新物品分类
  updateItemCategory(
    categoryId: string,
    updatedItemCategory: Partial<ItemCategory>,
  ): Promise<ItemCategory | null>;

  // 删除物品分类
  deleteItemCategory(categoryId: string): Promise<void>;
}
