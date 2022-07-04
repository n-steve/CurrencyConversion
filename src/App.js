import "./App.css";
import React from "react";
import CalculateConvert from "./Components/CalculateConvert";
// import PipCalculator from "./Calculateprofit/PipCalculator";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <script
          async
          src="//jsfiddle.net/TradingView/eaod9Lq8/embed/js/"
        ></script>
        <CalculateConvert />
        {/* <PipCalculator /> */}
      </header>
    </div>
  );
}
export default App;
