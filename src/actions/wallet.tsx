import { DEPOSIT, WITHDRAW, BANKRUPT } from "../constant";
import Dispatch from "redux";

interface IDeposit {
  type: DEPOSIT;
  payload: number;
}

interface IWithDraw {
  type: WITHDRAW;
  payload: number;
}

type IBankrupt = {
  type: BANKRUPT;
  payload: number;
};

export type Action = IDeposit | IWithDraw | IBankrupt;

export const depositMoney = (amount: number) => {
  return (dispatch: any) => {
    dispatch({
      type: DEPOSIT,
      payload: amount,
    });
  };
};

export const withdrawMoney = (amount: number) => {
  return (dispatch: any) => {
    dispatch({
      type: WITHDRAW,
      payload: amount,
    });
  };
};

export const bankrupt = () => {
  return (dispatch: any) => {
    dispatch({
      type: BANKRUPT,
    });
  };
};
