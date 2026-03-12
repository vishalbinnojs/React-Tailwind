
    import { FETCH_CURRENT_ERROR, FETCH_CURRENT_PENDING, FETCH_CURRENT_SUCCESS, FETCH_FORECAST_ERROR, FETCH_FORECAST_PENDING, FETCH_FORECAST_SUCCESS, SET_CITY } from "../constants/weatherConstants"
    import { currentApi, forecastApi } from "../axiosInstance"
    const API_KEY = import.meta.env.VITE_WEATHER_API

export const fetchCurrentPending = () => {
    return{
        type:FETCH_CURRENT_PENDING
        
    }
}

export const fetchCurrentSuccess = (data) => {
    return{
        type:FETCH_CURRENT_SUCCESS,
        payload:data
    }
}

export const fetchCurrentError = (error) => {
    return{
        type:FETCH_CURRENT_ERROR,
        payload:error
    }
}

export const fetchForecastPending = () => {
    return{
        type:FETCH_FORECAST_PENDING
    }
}

export const fetchForecastSuccess = (data) => {
    return{
        type:FETCH_FORECAST_SUCCESS,
        payload:data
    }
}

export const fetchForecastError = (error) => {
return{
    type:FETCH_FORECAST_ERROR,
    payload:error
}
}
export const setCity = (city) => {
    return{
        type:SET_CITY,
        payload:city
    }
}

export const fetchCurrent = (city) => {
    return async (dispatch) => {
    dispatch(fetchCurrentPending())
        try {
            const currentDetails = await currentApi(`?q=${city}&appid=${API_KEY}`)
            console.log("current",currentDetails);
            
            dispatch(fetchCurrentSuccess(currentDetails.data))
        } catch (error) {
            dispatch(fetchCurrentError(error))
        }
    }
}

export const fetchForecast = (city) => {
    return async (dispatch) => {
    dispatch(fetchForecastPending())
        try {
            const forecastDetails = await forecastApi(`?q=${city}&appid=${API_KEY}`)
            console.log(forecastDetails);  
            dispatch(fetchForecastSuccess(forecastDetails.data))
        } catch (error) {
            dispatch(fetchForecastError(error))
        }
    }
}