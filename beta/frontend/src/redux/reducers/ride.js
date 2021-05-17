import {
    GET_VEHICLES,
    ADD_RIDE,
    GET_RIDES
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
    default:
        return state;
    }
  };
  