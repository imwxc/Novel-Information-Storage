interface CharacterService {
  createCharacter(character: Omit<Character, 'CharacterID' | 'CreatedAt' | 'UpdatedAt'>): Promise<Character>;
  getCharacterById(id: number): Promise<Character | null>;
  updateCharacter(id: number, updatedCharacter: Partial<Character>): Promise<Character | null>;
  deleteCharacter(id: number): Promise<void>;
}
interface Character {
  CharacterName: string;
  CharacterType: string;
  InfoID: number;
  CharacterID: number;
  Level: number; // 仅主角
  Skills: string; // 仅主角
  Status: string; // 如：健康、情绪 // 仅主角
  BasicInfo: string; // 如：姓名、性别、年龄 // 配角
  Relationship: string; // 配角
  Dynamics: string; // 配角
  CreatedAt: Date;
  UpdatedAt: Date;
}
