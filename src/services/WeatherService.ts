import { AxiosResponse } from 'axios';
import api from '../axios';
import { Weather } from '../store/types/types';

export class WeatherService {
  static getCurrentWeather(
    lat: string,
    lon: string
  ): Promise<AxiosResponse<Weather>> {
    return api.get<Weather>(`/weather?lat=${lat}&lon=${lon}`);
  }
}
