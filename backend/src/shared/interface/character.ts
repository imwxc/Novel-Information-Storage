// 角色信息表
export interface Character {
  infoID: string;
  characterID: string;
  characterName: string;
  gender: string;
  age?: number;
  characterType: string; // 如：主角、配角
  level?: number; // 仅主角
  skills?: string; // 技能
  status?: string; // 如：健康、情绪 // 仅主角
  basicInfo?: string; // 如：姓名、性别、年龄 // 配角
  relationship?: string; // 配角
  dynamics?: string; // 配角
}

export interface CharacterService {
  // 创建一个新的角色信息
  createCharacter(character: Character): Promise<Character>;

  // 根据角色ID获取角色信息
  getCharacterById(characterId: string): Promise<Character | null>;

  // 更新角色信息
  updateCharacter(
    characterId: string,
    updatedCharacter: Partial<Character>,
  ): Promise<Character | null>;

  // 删除角色信息
  deleteCharacter(characterId: string): Promise<void>;
}
