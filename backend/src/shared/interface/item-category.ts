interface ItemCategory {
  CategoryID: number;
  CategoryName: string;
  CreatedAt: Date;
  UpdatedAt: Date;
}

interface ItemCategoryService {
  createCategory(category: Omit<ItemCategory, 'CategoryID' | 'CreatedAt' | 'UpdatedAt'>): Promise<ItemCategory>;
  getCategoryById(id: number): Promise<ItemCategory | null>;
  updateCategory(id: number, updatedCategory: Partial<ItemCategory>): Promise<ItemCategory | null>;
  deleteCategory(id: number): Promise<void>;
}
