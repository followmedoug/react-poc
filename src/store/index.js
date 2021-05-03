import { createStore, combineReducers } from "redux";
import pokemon from "./pokemon";

const rootReducer = combineReducers({
  pokemon,
});

const store = createStore(rootReducer);

export default store;
