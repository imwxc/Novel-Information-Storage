// item.service.ts
import { Injectable } from '@nestjs/common';
import { Item, ItemServiceInterface } from 'src/shared/interface/item';
@Injectable()
export class ItemService implements ItemServiceInterface {
  // 假设这个items变量是用来模拟数据库存储的
  private items: Item[] = [];
  async createItem(item: Item): Promise<Item> {
    // 这里应该是将item保存到数据库中
    this.items.push(item);
    // 更新ItemCategory中的信息
    await this.updateItemCategoryForNewItem(item);
    return item;
  }
  async getAllItems(): Promise<Item[]> {
    // 从数据库中获取所有物品
    return this.items;
  }
  async getItemById(itemId: string): Promise<Item | null> {
    // 从数据库中根据itemId获取单个物品
    return this.items.find((item) => item.itemID === itemId) || null;
  }
  async updateItem(
    itemId: string,
    updatedItem: Partial<Item>,
  ): Promise<Item | null> {
    // 在数据库中找到对应的物品并更新它
    const item = this.items.find((item) => item.itemID === itemId);
    if (item) {
      Object.assign(item, updatedItem);
      // 保存更新后的物品到数据库
      return item;
    }
    return null;
  }
  async deleteItem(itemId: string): Promise<void> {
    // 在数据库中删除对应的物品
    const index = this.items.findIndex((item) => item.itemID === itemId);
    if (index !== -1) {
      this.items.splice(index, 1);
    }
  }
  // 新增物品后更新分类信息
  private async updateItemCategoryForNewItem(item: Item): Promise<void> {
    // 这里应该调用ItemCategoryService的方法来更新分类
    // 模拟调用
    console.log(item);
  }
}
