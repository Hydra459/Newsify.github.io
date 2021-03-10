// import { act } from "react-dom/test-utils";
import _ from 'lodash';

// export default (state=[], action) => {
//     switch (action.type) {
//         case 'SEARCH_NEWS' :
//             return action.payload
//         default:
//             return state;
//     };
// };

export default (state={}, { payload,type }) => {
    switch (type) {
        case 'SEARCH_NEWS' :
            return {...state, ..._.mapValues(payload, function(val) {
                val.id = payload.indexOf(val);
                return val;
            })}
        default:
            return state;
    };
};