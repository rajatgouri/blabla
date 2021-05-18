import {
    GET_VEHICLES,
    ADD_RIDE,
    GET_RIDES,
    GET_RIDE_BY_ID,
    CONFIRM_RIDE,
    BOOK_RIDE
  } from "../constants";
  
  export default (state = { adminData: null }, action) => {
    switch (action.type) {
    case GET_VEHICLES:
        console.log(action?.data);
    return { ...state, rideData: action?.data };
    case ADD_RIDE:
        console.log(action?.data);
    return { ...state, rideData: action?.data };
    case GET_RIDES:
        console.log(action?.data);
    return { ...state, rideData: action?.data };
    case GET_RIDE_BY_ID:
        console.log(action?.data);
    return { ...state, rideData: action?.data };
    case CONFIRM_RIDE:
        console.log(action?.data);
    return { ...state, rideData: action?.data };
    case BOOK_RIDE:
        console.log(action?.data);
    return { ...state, rideData: action?.data };
    default:
        return state;
    }
  };
  