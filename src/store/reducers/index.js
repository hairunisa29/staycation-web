import { combineReducers } from "redux";
import checkoutReducer from "./checkoutReducer";
import pageReducer from "./pageReducer";

export default combineReducers({
  checkout: checkoutReducer,
  page: pageReducer,
});
