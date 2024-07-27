interface Item {
  ItemID: number;
  ItemName: string;
  Description: string;
  AcquisitionTime: Date;
  CategoryID: number;
  CreatedAt: Date;
  UpdatedAt: Date;
}

interface ItemService {
  createItem(item: Omit<Item, 'ItemID' | 'CreatedAt' | 'UpdatedAt'>): Promise<Item>;
  getItemById(id: number): Promise<Item | null>;
  updateItem(id: number, updatedItem: Partial<Item>): Promise<Item | null>;
  deleteItem(id: number): Promise<void>;
}
