import { combineReducers } from "redux";
// import { ApplyMiddleware } from 'redux-thunk'

import walletReducer from "./wallet";

const reducers = combineReducers({
  wallet: walletReducer,
});

export default reducers;
export type State = ReturnType<typeof reducers>;
