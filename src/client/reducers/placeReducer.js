import * as types from '../constants/action_types.js';

const initialState = {
  description: '',
  sourceImage: ''
}

const placeReducer = (state=initialState, action) => {
  switch(action.type) {
    case types.UPDATE_DESCRIPTION_IMAGE:
      const newState = Object.assign({}, state);
      newState.description = action.description;
      newState.sourceImage = action.sourceImage;
      return {
        newState
      }
    default: 
      return state;
  }
}
export default placeReducer;