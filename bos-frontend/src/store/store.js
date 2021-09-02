import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { authReducer } from "../reducers/authReducers";
import { getAllSubesReducer, getSubeDetailsReducer, newSubeReducer, subeReducer } from "../reducers/subeReducers";


const rootReducer = combineReducers({
  auth: authReducer,
  newSube: newSubeReducer,

  sube: subeReducer,
  getSubeDetails: getSubeDetailsReducer,
  getAllSubes: getAllSubesReducer,
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
