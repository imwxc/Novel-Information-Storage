from pydantic import BaseModel, field_validator
from typing import Optional,List
import re

# 日期格式正则表达式
date_pattern = re.compile(r'^\d{4}-\d{2}-\d{2}$')


# 物品分类表
class ItemCategory(BaseModel):
    CategoryID: str
    CategoryName: str
    ItemIDs: List[str]

# 物品表
class Item(BaseModel):
    ItemID: str
    ItemName: str
    Description: Optional[str]
    AcquisitionTime: str  # 日期格式 YYYY-MM-DD
    CategoryID: str

# 天气表
class Weather(BaseModel):
    WeatherID: str
    Date: str  # 日期格式 YYYY-MM-DD
    Condition: str

# 角色信息表
class Character(BaseModel):
    InfoID: str
    CharacterID: str
    CharacterName: str
    Gender: str
    Age: Optional[int] = None
    CharacterType: str  # 如：主角、配角
    Level: Optional[int] = None  # 仅主角
    Skills: Optional[str] = None  # 仅主角
    Status: Optional[str] = None  # 如：健康、情绪 // 仅主角
    BasicInfo: Optional[str] = None  # 如：姓名、性别、年龄 // 配角
    Relationship: Optional[str] = None  # 配角
    Dynamics: Optional[str] = None  # 配角

# 日期分区表，记录每日的数据变化情况
class DateTable(BaseModel):
    DateID: str
    Date: str  # 日期格式 YYYY-MM-DD
    # 每日只记录最终的物品状态
    Items: List[Item]
    Weather: Weather
    # 每日只记录最终的角色状态
    Characters: List[Character]

    @field_validator('Date')
    def validate_date(cls, v):
        if not date_pattern.match(v):
            raise ValueError('日期格式应为 YYYY-MM-DD')
        return v


# 物品状态修改日志表
class ItemStatusLog(BaseModel):
    LogID: str
    PreviousItem: Item
    NewItem: Item
    ModificationType: str  # 如：错误修正、正常消耗
    ModificationTime: str  # 日期格式 YYYY-MM-DD
    CreatedAt: DateTable  # 日期格式 YYYY-MM-DD
    UpdatedAt: DateTable  # 日期格式 YYYY-MM-DD

# 角色状态修改日志表
class CharacterStatusLog(BaseModel):
    LogID: str
    PreviousCharacter: Character
    NewCharacter: Character
    ModificationType: str  # 如：错误修正、正常消耗
    ModificationTime: str  # 日期格式 YYYY-MM-DD
    CreatedAt: DateTable  # 日期格式 YYYY-MM-DD
    UpdatedAt: DateTable  # 日期格式 YYYY-MM-DD