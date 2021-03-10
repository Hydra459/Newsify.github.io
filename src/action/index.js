import axios from 'axios';
import { formValues } from 'redux-form';

export const SearchNews = (formValues) => async dispatch => {
    const response = await axios.get(`https://newsapi.org/v2/everything?q=${formValues}&apiKey=39f0ca53660c4ccf83f483a17165b25d`);
    dispatch({
        type: 'SEARCH_NEWS',
        payload: response.data.articles
    });
};

export const fetchHeadLine = (id) => async dispatch => {
    const response = await axios.get(`/headlines/${id}`)
    dispatch({
        type: 'FETCH_HEADLINE',
        payload: response.data.articles
    })
}

export const fetchLocation = () =>  async (dispatch) => {
    window.navigator.geolocation.getCurrentPosition(
        (pos) => {
            dispatch({
                type: 'FETCH_VALUE',
                payload: pos.coords
            })
        },
        (err) => console.log(err)
    );
 };

export const fetchWeather = (loc) => async (dispatch, getState) => {
    // const { long, lat } = getState().location;
    console.log(getState())

    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${loc.lat}&lon=${loc.long}&appid=21bf0f5883e5e8912085e9dff5b81f61`);
    
    dispatch({
        type: 'FETCH_WEATHER',
        payload: response.data.name
    })
};



// export const fetchHeadLines = () => async (dispatch, getState) => {
//     console.log(getState())
//     const country = getState().weather;
//     const response = await axios.get(`http://newsapi.org/v2/top-headlines?country=${country}&apiKey=39f0ca53660c4ccf83f483a17165b25d`);
//     dispatch({
//         type: 'HEAD_LINE',
//         payload: response.data.articles
//     });
// };
