import { combineReducers } from "redux";

// Your individual reducer goes here!
import login from "./login";

const rootReducer = combineReducers({ login });

export default rootReducer;
