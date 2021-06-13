import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as walletAction from "./actions/wallet";
import { State } from "./reducers";
import { bindActionCreators } from "redux";

interface IInput {}

const App = () => {
  const dispatch = useDispatch();
  const { depositMoney, withdrawMoney, bankrupt } = bindActionCreators(
    walletAction,
    dispatch
  );
  const state = useSelector((state: State) => state.wallet);

  const [inputValue, setInputValue] = useState("");

  const handleClick = (e: any) => {
    const names = e.target.name;

    if (names === "deposit") {
      console.log("wewe");
      depositMoney(parseInt(inputValue));
    }
    if (names === "withdraw") {
      withdrawMoney(parseInt(inputValue));
    }
  };
  return (
    <div className="">
      <div>{state}</div>
      <div>
        <div>
          <input
            type="number"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button name="deposit" onClick={(e) => handleClick(e)}>
            Deposit
          </button>
        </div>

        <div>
          <input
            type="number"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button name="withdraw" onClick={(e) => handleClick(e)}>
            Withdraw
          </button>
        </div>

        <button onClick={(e) => handleClick(e)}>Bankrupt</button>
      </div>
    </div>
  );
};

export default App;
