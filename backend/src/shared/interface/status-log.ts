import { Character } from './character';
import { DateTable } from './date';
import { Item } from './item';

// 角色状态修改日志表
export interface CharacterStatusLog {
  logID: string;
  previousCharacter: Character['characterID'];
  newCharacter: Character['characterID'];
  modificationType: string; // 如：错误修正、正常消耗
  modificationTime: string; // 日期格式 YYYY-MM-DD
  createdAt: DateTable['dateID']; // 日期格式 YYYY-MM-DD
  updatedAt: DateTable['dateID']; // 日期格式 YYYY-MM-DD
}

// 物品状态修改日志表
export interface ItemStatusLog {
  logID: string;
  previousItem: Item['itemID'];
  newItem: Item['itemID'];
  modificationType: string; // 如：错误修正、正常消耗
  modificationTime: string; // 日期格式 YYYY-MM-DD
  createdAt: DateTable['dateID']; // 日期格式 YYYY-MM-DD
  updatedAt: DateTable['dateID']; // 日期格式 YYYY-MM-DD
}

export interface CharacterStatusLogService {
  // 创建一个新的角色状态修改日志
  createCharacterStatusLog(
    characterStatusLog: CharacterStatusLog,
  ): Promise<CharacterStatusLog>;

  // 获取所有角色状态修改日志
  getAllCharacterStatusLogs(): Promise<CharacterStatusLog[]>;

  // 根据日志ID获取角色状态修改日志
  getCharacterStatusLogById(logId: string): Promise<CharacterStatusLog | null>;

  // 更新角色状态修改日志
  updateCharacterStatusLog(
    logId: string,
    updatedCharacterStatusLog: Partial<CharacterStatusLog>,
  ): Promise<CharacterStatusLog | null>;

  // 删除角色状态修改日志
  deleteCharacterStatusLog(logId: string): Promise<void>;
}

export interface ItemStatusLogService {
  // 创建一个新的物品状态修改日志
  createItemStatusLog(itemStatusLog: ItemStatusLog): Promise<ItemStatusLog>;

  // 获取所有物品状态修改日志
  getAllItemStatusLogs(): Promise<ItemStatusLog[]>;

  // 根据日志ID获取物品状态修改日志
  getItemStatusLogById(logId: string): Promise<ItemStatusLog | null>;

  // 更新物品状态修改日志
  updateItemStatusLog(
    logId: string,
    updatedItemStatusLog: Partial<ItemStatusLog>,
  ): Promise<ItemStatusLog | null>;

  // 删除物品状态修改日志
  deleteItemStatusLog(logId: string): Promise<void>;
}
