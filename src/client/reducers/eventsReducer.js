import * as types from '../constants/action_types.js';

const eventReducer = (state={}, action) => {
  switch(action.type) {
    case types.ADD_EVENT:
      const newState = Object.assign({}, state);
      if(newState.action.destination) {
        newState.action.destination.push(action.place);
      } else{
        newState.action.destination = [];
      }
      return {
        newState
      }
    default: 
      return state;
  }
}
export default eventReducer;