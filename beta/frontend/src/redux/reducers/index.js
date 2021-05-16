import { combineReducers } from "redux";

import auth from "./auth";
import admin from "./admin";
import ride from "./ride";

export default combineReducers({
  auth,
  admin,
  ride
});
