interface ItemStatusLog {
  LogID: number;
  ItemID: number;
  PreviousStatus: string;
  NewStatus: string;
  ModificationType: string;
  ModificationTime: Date;
  CreatedAt: Date;
  UpdatedAt: Date;
}

interface ItemStatusLogService {
  createLog(log: Omit<ItemStatusLog, 'LogID' | 'CreatedAt' | 'UpdatedAt'>): Promise<ItemStatusLog>;
  getLogById(id: number): Promise<ItemStatusLog | null>;
  updateLog(id: number, updatedLog: Partial<ItemStatusLog>): Promise<ItemStatusLog | null>;
  deleteLog(id: number): Promise<void>;
}
