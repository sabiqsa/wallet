import React from "react";
import { DEPOSIT, WITHDRAW, BANKRUPT } from "../constant";
import { Action } from "../actions/wallet";

const initialState = 0;

const walletReducer = (state: number = initialState, action: Action) => {
  switch (action.type) {
    case DEPOSIT:
      return state + action.payload;
    case WITHDRAW:
      return state - action.payload;
    case BANKRUPT:
      return 0;
    default:
      return state;
  }
};

export default walletReducer;
