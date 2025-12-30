import axios from "axios";

export const currentApi = axios.create({
    baseURL : 'https://api.openweathermap.org/data/2.5/weather',
    responseType:"json",
    // timeout:1000,
})
export const forecastApi = axios.create({
    baseURL : 'https://pro.openweathermap.org/data/2.5/forecast',
    responseType:"json",
    // timeout:1000,
})
// https://pro.openweathermap.org/data/2.5/forecast/hourly?lat={lat}&lon={lon}&appid={API key}