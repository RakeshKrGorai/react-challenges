import { useState } from "react";
import "./index.css";

function App() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const date = new Date("09 June 2024");
  date.setDate(date.getDate() + count);

  function PreviousStep() {
    setStep((s) => s - 1);
  }

  function NextStep() {
    setStep((s) => s + 1);
  }

  function PreviousCounter() {
    setCount((c) => c - step);
  }

  function NextCounter() {
    setCount((c) => c + step);
  }

  return (
    <>
      <div className="steps">
        <button className="previous" onClick={PreviousStep}>
          -
        </button>
        <p>Steps : {step}</p>
        <button className="next" onClick={NextStep}>
          +
        </button>
      </div>
      <div className="counter">
        <button className="previous" onClick={PreviousCounter}>
          -
        </button>
        <p>Counter : {count}</p>
        <button className="next" onClick={NextCounter}>
          +
        </button>
      </div>
      <span>
        {count === 0
          ? "Today is"
          : count > 0
          ? `${count} days from today is `
          : `${Math.abs(count)} days ago was `}
      </span>
      <span>{date.toDateString()}</span>
    </>
  );
}

export default App;
