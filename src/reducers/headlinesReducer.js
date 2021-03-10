export default (state = null, action) => {
    switch (action.type) {
        case 'HEAD_LINE' :
            return action.payload;
        default :
            return state
    }
}