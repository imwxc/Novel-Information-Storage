import { DateTable } from './date';

// 天气表
export interface Weather {
  weatherID: string;
  date: DateTable['dateID']; // 日期格式 YYYY-MM-DD
  condition: string;
}

export interface WeatherService {
  // 创建一个新的天气记录
  createWeatherRecord(weather: Weather): Promise<Weather>;

  // 获取所有天气记录
  getAllWeatherRecords(): Promise<Weather[]>;

  // 根据天气ID获取天气记录
  getWeatherRecordById(weatherId: string): Promise<Weather | null>;

  // 更新天气记录
  updateWeatherRecord(
    weatherId: string,
    updatedWeather: Partial<Weather>,
  ): Promise<Weather | null>;

  // 删除天气记录
  deleteWeatherRecord(weatherId: string): Promise<void>;
}
