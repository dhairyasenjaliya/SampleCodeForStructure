import {
  SET_DATA,
  API_START,
  API_END,
  FETCH_DATA
} from "../actions/types";

export default function(state = {}, action) {
  console.log("action type ==> ", action.type);
  switch (action.type) {
    case SET_DATA:
      return { data: action.payload };
    case API_START:
      if (action.payload === FETCH_DATA) {
        return {
          ...state,
          isLoadingData: true
        };
      }
    case API_END:
      if (action.payload === FETCH_DATA) {
        return {
          ...state,
          isLoadingData: false
        };
      }
    default:
      return state;
  }
}
