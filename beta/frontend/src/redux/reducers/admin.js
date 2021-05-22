import {
    GET_USERS,
    GET_USER_BY_ID,
    APPROVE_USER,
    ADMIN_RIDES,
    ADMIN_RIDE
  } from "../constants";
  
  export default (state = { adminData: null }, action) => {
    switch (action.type) {
    case GET_USERS:
        console.log(action?.data);
    return { ...state, adminData: action?.data };
    case GET_USER_BY_ID:
        console.log(action?.data);
    return { ...state, adminData: action?.data };
    case APPROVE_USER:
        console.log(action?.data);
        return { ...state, adminData: action?.data };
    case ADMIN_RIDES:
        console.log(action?.data);
        return { ...state, adminData: action?.data };
    case ADMIN_RIDE:
        console.log(action?.data);
        return { ...state, adminData: action?.data };
    default:
        return state;
    }
  };
  