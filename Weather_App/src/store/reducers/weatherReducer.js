
import { FETCH_CURRENT_ERROR, FETCH_CURRENT_PENDING, FETCH_CURRENT_SUCCESS, FETCH_FORECAST_ERROR, FETCH_FORECAST_PENDING, FETCH_FORECAST_SUCCESS, SET_CITY } from '../constants/weatherConstants';

const initialState = {
    city:"Delhi",
    current: null,
    forecast: null,
    currentLoading: false,
    forecastLoading:false,
    error: null
}

export const weatherReducer = (state = initialState, action) => {
    if (action.type === FETCH_CURRENT_PENDING) {
        return {
            ...state,
            currentLoading: true,
            error: null
        }
    }
    else if (action.type === FETCH_CURRENT_SUCCESS) {
        return {
            ...state,
            currentLoading: false,
            current: action.payload,
            forecast:null
        }
    }
    else if (action.type === FETCH_CURRENT_ERROR) {
        return {
            ...state,
            currentLoading: false,
            error: action.payload
        }
    }
    else if (action.type === FETCH_FORECAST_PENDING) {
        return {
            ...state,
            forecastLoading: true,
            error: null
        }
    }
    else if (action.type === FETCH_FORECAST_SUCCESS) {
        return {
            ...state,
            forecastLoading: false,
            forecast: action.payload
        }
    }
    else if (action.type === FETCH_FORECAST_ERROR) {
        return {
            ...state,
            forecastLoading: false,
            error: action.payload
        }
    }
    else if (action.type === SET_CITY) {
        return {
            ...state,
            city: action.payload
        }
    }
    else {
        return state
    }

}








