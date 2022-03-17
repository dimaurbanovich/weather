import { currentWeatherSlice } from './../slices/currentWeatherSlice';
import { WeatherService } from '../../services/WeatherService';
import { AppDispatch } from './../store';

type WeatherPayload = {
  lat: string;
  lon: string;
};

export const fetchCurrentWeather =
  (payload: WeatherPayload) => async (dispatch: AppDispatch) => {
    try {
      dispatch(currentWeatherSlice.actions.fetchCurrentWeather());
      const res = await WeatherService.getCurrentWeather(
        payload.lat,
        payload.lon
      );
      if (res.status === 200) {
        dispatch(currentWeatherSlice.actions.fetchCurrentWeatherSuccess(res));
      } else {
        dispatch(currentWeatherSlice.actions.fetchCurrentWeatherError(res));
      }
    } catch (error) {
      console.log(error);
    }
  };
