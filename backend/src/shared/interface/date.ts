import { Character } from './character';
import { Item } from './item';
import { Weather } from './weather';

// 日期分区表，记录每日的数据变化情况
export interface DateTable {
  dateID: string;
  date: string; // 日期格式 YYYY-MM-DD
  // 每日只记录最终的物品状态
  items: Item[];
  weather: Weather['weatherID'];
  // 每日只记录最终的角色状态
  characters: Character['characterID'][];
}

export interface DateTableService {
  // 创建一个新的日期分区表记录
  createDateTableRecord(dateTable: DateTable): Promise<DateTable>;

  // 根据日期ID获取日期分区表记录
  getDateTableRecordById(dateId: string): Promise<DateTable | null>;

  // 更新日期分区表记录
  updateDateTableRecord(
    dateId: string,
    updatedDateTable: Partial<DateTable>,
  ): Promise<DateTable | null>;

  // 删除日期分区表记录
  deleteDateTableRecord(dateId: string): Promise<void>;
}
