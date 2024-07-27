// item-category.service.ts
import { Injectable } from '@nestjs/common';
import {
  ItemCategory,
  ItemCategoryServiceInterface,
} from 'src/shared/interface/item-category';
@Injectable()
export class ItemCategoryService implements ItemCategoryServiceInterface {
  // 假设这个itemCategories变量是用来模拟数据库存储的
  private itemCategories: ItemCategory[] = [];
  async createItemCategory(itemCategory: ItemCategory): Promise<ItemCategory> {
    // 这里应该是将itemCategory保存到数据库中
    this.itemCategories.push(itemCategory);
    return itemCategory;
  }
  async getAllItemCategories(): Promise<ItemCategory[]> {
    // 从数据库中获取所有物品分类F
    return this.itemCategories;
  }
  async getItemCategoryById(categoryId: string): Promise<ItemCategory | null> {
    // 从数据库中根据categoryId获取单个物品分类
    return (
      this.itemCategories.find(
        (category) => category.categoryID === categoryId,
      ) || null
    );
  }
  async updateItemCategory(
    categoryId: string,
    updatedItemCategory: Partial<ItemCategory>,
  ): Promise<ItemCategory | null> {
    // 在数据库中找到对应的分类并更新它
    const category = this.itemCategories.find(
      (category) => category.categoryID === categoryId,
    );
    if (category) {
      Object.assign(category, updatedItemCategory);
      // 保存更新后的分类到数据库
      return category;
    }
    return null;
  }
  async deleteItemCategory(categoryId: string): Promise<void> {
    // 在数据库中删除对应的分类
    const index = this.itemCategories.findIndex(
      (category) => category.categoryID === categoryId,
    );
    if (index !== -1) {
      this.itemCategories.splice(index, 1);
    }
  }
  // 将新物品的ID添加到对应的分类中
  async addItemToCategory(categoryID: string, itemID: string): Promise<void> {
    // 在数据库中找到对应的分类并添加物品ID
    const category = this.itemCategories.find(
      (category) => category.categoryID === categoryID,
    );
    if (category) {
      if (!category.itemIDs.includes(itemID)) {
        category.itemIDs.push(itemID);
        // 保存更新后的分类信息到数据库
      }
    }
  }
}
