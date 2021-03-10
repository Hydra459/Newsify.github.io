const INITIAL_STATE = {
    lat: null,
    long: null
};


export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'FETCH_VALUE' :
            return {...state, lat:action.payload.latitude, long: action.payload.longitude};
        default :
            return state;
    };
};

// export default (state = null, action) => {
//     switch (action.type) {
//         case 'FETCH_VALUE' :
//             return action.payload
//         default :
//             return state
//     }
// }