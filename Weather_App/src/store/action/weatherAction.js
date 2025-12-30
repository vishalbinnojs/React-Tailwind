
import { FETCH_WEATHER_PENDING, FETCH_FORECAST_SUCCESS, FETCH_CURRENT_SUCCESS, FETCH_WEATHER_ERROR, SET_CITY } from "../constants/weatherConstants";
import { forecastApi, currentApi } from '../axiosInstance'

const API_KEY = import.meta.env.VITE_WEATHER_API;

export const fetchWeatherPending = () => {
    return {
        type: FETCH_WEATHER_PENDING,
    }
}
export const fetchCurrentSuccess = (data) => {
    return {
        type: FETCH_CURRENT_SUCCESS,
        payload: data,
    }
}
export const fetchForecastSuccess = (data) => {
    return {
        type: FETCH_FORECAST_SUCCESS,
        payload: data,
    }
}
export const fetchWeatherError = (error) => {
    return {
        type: FETCH_WEATHER_ERROR,
        payload: error
    }
}
export const setCity = (city) => {
    return {
        type: SET_CITY,
        payload: city,
    }
}

export const fetchWeather = (city) => {
    
    //after setting the middleware thunk we get a async function  bcz redux is totally synchronous and to hit the api we have to do it in the async function
    // Also this async function has 'dispatch' parameter by default
    // because we are making only one api call and all other actions are dispatched inside this async function
    return async (dispatch) => {
        dispatch(fetchWeatherPending())
        try {

            const currentWeatherDetails = await currentApi(`?q=${city}&appid=${API_KEY}`)

            const foreCastDetails = await forecastApi(`?q=${city}&appid=${API_KEY}`)

            dispatch(fetchCurrentSuccess(currentWeatherDetails.data))
            dispatch(fetchForecastSuccess(foreCastDetails.data.list))

        } catch (error) {
            dispatch(fetchWeatherError("Something Went Wrong...!"))
        }


    }
}
