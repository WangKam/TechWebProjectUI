import { combineReducers } from "redux";
import authReducer from "./Auth/reducer";
import laptopReducer from "./Laptop/reducer";
import loadingReducer from "./Loading/reducer";

const reducer = () =>
  combineReducers({
    authReducer,
    laptopReducer,
    loadingReducer,
  });

export default reducer;
