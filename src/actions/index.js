import axios from 'axios';

const API_KEY = "7dfab61741a1eb14f665e416867151b3";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}&units=metric`

export const FETCH_WEATHER = 'FETCH_WEATHER';
export const DELETE_CITY = 'DELETE_CITY';

export function fetchWeather(city) {
  let url = `${ROOT_URL}&q=${city}`;
  let request = axios.get(url);
  return {
    type: FETCH_WEATHER,
    payload: request
  };
}

export function deleteCity(city) {

  return {
    type: DELETE_CITY,
   
  }

}
