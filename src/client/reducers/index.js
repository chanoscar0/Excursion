import { combineReducers } from 'redux';

// import all reducers here
import eventsReducer from './eventsReducer';
import placeReducer from './placeReducer';
import activitiesReducer from './activitiesReducer';
import cityCodeReducer from './cityCodeReducer';

// combine reducers
const reducers = combineReducers({
  // if we had other reducers, they would go here
  events: eventsReducer,
  place: placeReducer,
  activities: activitiesReducer,
  cityCode: cityCodeReducer
});

// make the combined reducers available for import
export default reducers;