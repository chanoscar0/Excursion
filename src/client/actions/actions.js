import * as types from '../constants/action_types.js';

// export const addEvent = (obj) => ({
//   type: types.ADD_EVENT,
//   payload: obj
// });

// export const fetchDescriptionImageStart = (obj) => ({
//   type: types.FETCH_DESCRIPTION_IMAGE_START,
//   payload: obj
// });

// export const fetchActivitiesStart = (obj) => ({
//   type: types.FETCH_ACTIVITIES_START,
//   payload: obj
// });

// export const fetchActivitiesSuccess = (obj) => ({
//   type: types.FETCH_ACTIVITIES_SUCCESS,
//   payload: obj
// });

// export const fetchActivitiesFail = (obj) => ({
//   type: types.FETCH_ACTIVITIES_FAIL,
//   payload: obj
// });
// export const fetchCityCode = ({country, destination}) => {
//   return dispatch => {
//     dispatch(fetchCityCodeStart());
//     let url = 'https://api.sygictravelapi.com/1.1/en/places/list?';
//     if(country !== "North America" && country !== "Australia"){
//       url += `levels=country&query=${destination}`;
//     } else{
//       url += `levels=city&query=${destination}`;
//     }
//     fetch(url, {
//       method: 'GET',
//       headers: {
//         'Content-Type':'application/json',
//         'x-api-key': 'dPGMz9OTla8MRsLiiEPL55j4vTwz9tXc8vW0M2oE'
//       }})
//       .then((data) => data.json())
//       .then((data) => {
//         dispatch(fetchCityCodeSuccess(data.data.places[0].id));
//       })
//       .catch((err) => {
//         dispatch(fetchCityCodeFail(err));
//       })
//   }
// }
// export const fetchCityCodeStart = () => ({
//   type: types.FETCH_CITY_CODE_START
// });

// export const fetchCityCodeSuccess = (cityCode) => ({
//   type: types.FETCH_CITY_CODE_SUCCESS,
//   payload: cityCode
// });

// export const fetchCityCodeFail = (error) => ({
//   type: types.FETCH_CITY_CODE_SUCCESS,
//   payload: {error}
// });

// export const fetchDescriptionImageSuccess = (obj) => ({
//   type: types.FETCH_DESCRIPTION_IMAGE_SUCCESS,
//   payload: obj
// })

// export const fetchDescriptionImageFail = (obj) => ({
//   type: types.FETCH_DESCRIPTION_IMAGE_FAIL,
//   payload: obj
// })

