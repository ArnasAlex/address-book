import { combineReducers } from "redux";
import settings from "./settings/reducer";
import users from "./users/reducer";

export default combineReducers({ users, settings });
