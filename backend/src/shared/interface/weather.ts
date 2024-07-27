interface Weather {
  WeatherID: number;
  Date: Date;
  Condition: string;
  CreatedAt: Date;
  UpdatedAt: Date;
}

interface WeatherService {
  createWeather(weather: Omit<Weather, 'WeatherID' | 'CreatedAt' | 'UpdatedAt'>): Promise<Weather>;
  getWeatherById(id: number): Promise<Weather | null>;
  updateWeather(id: number, updatedWeather: Partial<Weather>): Promise<Weather | null>;
  deleteWeather(id: number): Promise<void>;
}
