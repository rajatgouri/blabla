import { combineReducers } from "redux";

import auth from "./auth";
import admin from "./admin";
import ride from "./ride";
import contact from "./contact";

export default combineReducers({
  auth,
  admin,
  ride,
  contact
});
