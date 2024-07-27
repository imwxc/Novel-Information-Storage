// 物品表
export interface Item {
  itemID: string;
  itemName: string;
  description?: string;
  acquisitionTime: string; // 日期格式 YYYY-MM-DD
  categoryID: string;
}

// ItemService 接口定义了 CRUD 操作
export interface ItemService {
  // 创建一个新的物品
  createItem(item: Item): Promise<Item>;

  // 获取所有物品
  getAllItems(): Promise<Item[]>;

  // 根据物品ID获取物品
  getItemById(itemId: string): Promise<Item | null>;

  // 更新物品
  updateItem(itemId: string, updatedItem: Partial<Item>): Promise<Item | null>;

  // 删除物品
  deleteItem(itemId: string): Promise<void>;
}
