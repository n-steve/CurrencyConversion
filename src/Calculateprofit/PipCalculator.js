import React, { useState } from "react";

function PipCalculator({ getCurrency, secondRate, fromCurrency, toCurrency }) {
  

  const [getPair, setPair] = useState([]);
  const [profit, setProfit] = useState();
  const [loss, setLoss] = useState();

  const makePair = getCurrency.map((data, i) => (
    <option key={`${data}-${i}`} value={data}>
      {" "}
      <option>{data}</option>
    </option>
  ));
  let thirdRate;
  let lotSize;

  // first Get Pair Conversion  pair conversion from First Currency to Second Currency
  //1 EUR  === 1.0426 USD rate = 1.0426
  // get user Lot Size lot size meaning how much they're willing to pay rate x lot 1.0426 =
  // get Open Price
  // get Close Price
  // Deposit Money currency. $USD

  return (
    <div className="pipCalculator">
      <div>
        <h2>Pip Calculator</h2>
        <div>
          Currency Pair
          <div>
            <select>{makePair}</select>
            <select>{makePair}</select>
          </div>
        </div>
        <div>
          {" "}
          Lot Size & User's Currency
          <div>
            <input type="number" placeholder="lot size" />
            <button type="submit" placeholder="submit">
              Submit
            </button>
          </div>
        </div>
        <div>
          Buy/Sell
          <div>
            <select>
              <option>Buy</option>
              <option>Sell</option>
            </select>
          </div>
        </div>
        <div>
          Open Price
          <div>
            <input type="number" placeholder="0.00000"></input>
          </div>
        </div>
        <div>
          Close Price
          <div>
            <input type="number" placeholder="0.00000"></input>
          </div>
        </div>
        <div>
          Total Amount
          <div>
            <input
              type="textbox"
              placeholder="Open Price - Close Price, X lot size X currency exchangeRate."
            ></input>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PipCalculator;
