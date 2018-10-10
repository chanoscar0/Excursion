// import * as types from '../constants/action_types.js';

// const initialState = {
//   loading: false,
//   error: null,
//   cityCode: ''
// }

// const cityCodeReducer= (state=initialState, action) => {
//   switch(action.type) {
//     case FETCH_CITY_CODE_START:
//       return {
        
//         loading: true,
//       };
//     case FETCH_CITY_CODE_SUCCESS:
//       return {
       
//         loading: false,
//         error: null,
//         cityCode: action.payload
//       }
//     case types.FETCH_CITY_CODE_FAIL:
//       return {
  
//         loading: false,
//         error: action.payload.error
//       }
//     default: 
//       return state;
//   }
// }
// export default cityCodeReducer;