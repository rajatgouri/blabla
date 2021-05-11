import {
    GET_USERS,
    GET_USER_BY_ID,
    APPROVE_USER
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
    default:
        return state;
    }
  };
  