import React, { useState, useEffect } from "react";
import PipCalculator from "../Calculateprofit/PipCalculator";
import CurrencyList from "./CurrencyList";

function CalculateConvert() {
  const [getCurrency, setGetCurrency] = useState([]);
  const [fromCurrency, setFromCurrency] = useState();
  const [toCurrency, setToCurrency] = useState();
  const [currentRate, setCurrentRate] = useState();
  const [firstSelectAmount, setFirstSelectAmount] = useState(1);
  const [secondSelectAmount, setSecondSelectAmount] = useState(true);
  const [getProfit, setGetProfit] = useState([]);
  useEffect(() => {
    fetch(`https://api.exchangerate.host/latest`)
      .then((r) => r.json())
      .then((data) => {
        const displayFirstCurrency = Object.keys(data.rates)[149];

        setGetCurrency([data.base, ...Object.keys(data.rates)]);
        setFromCurrency(data.base);
        setToCurrency(displayFirstCurrency);
        setCurrentRate(data.rates[displayFirstCurrency]);
        setGetProfit(data.base, data.base);
      });
  }, []);
  console.log(getProfit);
  useEffect(() => {
    fetch(
      `https://api.exchangerate.host/latest?base=${fromCurrency}&symbols=${toCurrency}`
    )
      .then((r) => r.json())
      .then((data) => setCurrentRate(data.rates[toCurrency]));
  }, [fromCurrency, toCurrency]);

  let firstRate;
  let secondRate;

  if (secondSelectAmount) {
    firstRate = firstSelectAmount;
    secondRate = firstSelectAmount * currentRate;
  } else {
    secondRate = firstSelectAmount;
    firstRate = firstSelectAmount / currentRate;
  }

  function handleFirstOnChange(event) {
    setFirstSelectAmount(event.target.value);
    setSecondSelectAmount(true);
  }

  function handleSecondOnChange(event) {
    setFirstSelectAmount(event.target.value);
    setSecondSelectAmount(false);
  }
  const displayPair = getCurrency.map((data, i) => (
    <option key={`${data}-${i}`} value={data}>
      <p>{data}</p>
    </option>
  ));

  return (
    <div>
      <header>
        <h1>Currency Conversion</h1>
        <div>
          <div>
            {" "}
            <CurrencyList
              getCurrency={displayPair}
              selectedCurrency={fromCurrency}
              handleChange={(event) => setFromCurrency(event.target.value)}
              calculate={firstRate}
              handleRateChange={handleFirstOnChange}
            />
          </div>
          <div>
            <CurrencyList
              getCurrency={displayPair}
              selectedCurrency={toCurrency}
              handleChange={(event) => setToCurrency(event.target.value)}
              calculate={secondRate}
              handleRateChange={handleSecondOnChange}
            />
          </div>
          <PipCalculator
            getCurrency={displayPair}
            secondRate={secondRate}
            fromCurrency={setFromCurrency}
            toCurrency={setToCurrency}
          />
        </div>
      </header>
    </div>
  );
}

export default CalculateConvert;
