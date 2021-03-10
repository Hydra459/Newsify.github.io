// const INITIAL_STATE = {
//     feels_like: null,
//     humidity:  null,
//     temp: null
// }

// export default (state = INITIAL_STATE, action) => {
//     switch (action.type) {
//         case 'FETCH_WEATHER' :
//             return {...state, feels_like: action.payload.feels_like, humidity: action.payload.humidity, temp: action.payload.temp}
//         default :
//             return state
//     }
// }

// export default (state = null, action) => {
//     switch(action.type) {
//         case 'FETCH_WEATHER' :
//             return action.payload
//         default :
//             return state
//     }
// }

// const INITIAL_STATE = {
//     feels_like: null,
//     humidity:  null,
//     temp: null,
//     name: null
// }


export default (state = null, action) => {
    switch(action.type) {
        case 'FETCH_WEATHER' :
            return action.payload
        default :
            return state
    };
};