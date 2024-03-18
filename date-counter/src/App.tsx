import { useState } from "react";
import "./index.css";

function App() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const date = new Date("09 June 2024");
  date.setDate(date.getDate() + count);

  function handleReset() {
    setStep(1);
    setCount(0);
  }

  function PreviousCounter() {
    setCount((c) => c - step);
  }

  function NextCounter() {
    setCount((c) => c + step);
  }

  return (
    <div className="App">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        <p>Steps : {step}</p>
      </div>
      <div>
        <button onClick={PreviousCounter}>-</button>
        <span>
          <input
            type="text"
            value={count}
            onChange={(e) => setCount(Number(e.target.value))}
          />
        </span>
        <button onClick={NextCounter}>+</button>
      </div>
      <span>
        {count === 0
          ? "Today is "
          : count > 0
          ? `${count} days from today is `
          : `${Math.abs(count)} days ago was `}
      </span>
      <span>{date.toDateString()}</span>
      <div>
        {step !== 1 || count !== 0 ? (
          <button onClick={handleReset}>Reset</button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default App;
