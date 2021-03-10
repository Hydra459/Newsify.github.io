import { combineReducers } from 'redux';
import {reducer as formReducer} from 'redux-form';
import newsReducer from './newsReducer';
import locationReducer from './LocationReducer';
import WeatherReducer from './WeatherReducer';
import headlinesReducer from './headlinesReducer';

export default combineReducers ({
    form: formReducer,
    newsReducer: newsReducer,
    location: locationReducer,
    weather: WeatherReducer,
    // headlines: headlinesReducer
});