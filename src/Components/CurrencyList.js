import React from "react";
import PipCalculator from "../Calculateprofit/PipCalculator";
function CurrencyList({
  getCurrency,
  selectedCurrency,
  handleChange,
  calculate,
  handleRateChange,
}) {
  return (
    <div>
      ${" "}
      <input
        type="number"
        className="input"
        value={calculate}
        onChange={handleRateChange}
      />
      <select value={selectedCurrency} onChange={handleChange}>
        {getCurrency}
      </select>
    </div>
  );
}
export default CurrencyList;
