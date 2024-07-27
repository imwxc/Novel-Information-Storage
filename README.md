# Novel-Information-Storage

1. **物品分类表 (ItemCategories)**
   - 分类ID (CategoryID, 主键)
   - 分类名称 (CategoryName)
   - 创建时间 (CreatedAt)
   - 更新时间 (UpdatedAt)
2. **物品表 (Items)**
   - 物品ID (ItemID, 主键)
   - 物品名称 (ItemName)
   - 物品描述 (Description)
   - 获取时间 (AcquisitionTime)
   - 分类ID (CategoryID, 外键)
   - 创建时间 (CreatedAt)
   - 更新时间 (UpdatedAt)
3. **天气表 (Weather)**
   - 天气ID (WeatherID, 主键)
   - 日期 (Date)
   - 天气状况 (Condition)
   - 创建时间 (CreatedAt)
   - 更新时间 (UpdatedAt)
4. **物品状态修改日志表 (ItemStatusLogs)**
   - 日志ID (LogID, 主键)
   - 物品ID (ItemID, 外键)
   - 修改前状态 (PreviousStatus)
   - 修改后状态 (NewStatus)
   - 修改类型 (ModificationType) // 如：错误修正、正常消耗
   - 修改时间 (ModificationTime)
   - 创建时间 (CreatedAt)
   - 更新时间 (UpdatedAt)
5. **角色表 (Characters)**
   - 角色ID (CharacterID, 主键)
   - 角色名称 (CharacterName)
   - 角色类型 (CharacterType) // 如：主角、配角
   - 创建时间 (CreatedAt)
   - 更新时间 (UpdatedAt)
6. **角色信息表 (CharacterInfo)**
   - 信息ID (InfoID, 主键)
   - 角色ID (CharacterID, 外键)
   - 等级 (Level) // 仅主角
   - 技能 (Skills) // 仅主角
   - 状态 (Status) // 如：健康、情绪 // 仅主角
   - 基本资料 (BasicInfo) // 如：姓名、性别、年龄 // 配角
   - 角色关系 (Relationship) // 配角
   - 角色动态 (Dynamics) // 配角
   - 创建时间 (CreatedAt)
   - 更新时间 (UpdatedAt)
