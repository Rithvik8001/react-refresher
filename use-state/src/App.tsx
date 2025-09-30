import { useState } from "react";
import Display from "./components/display";
import Counter from "./components/counter";

const App = () => {
  const [count, setCount] = useState<number>(0);
  const [stepSize, setStepSize] = useState<number>(1);
  const [history, setHistory] = useState<number[]>([]);

  const incrementCount = () => {
    setCount((prev) => {
      const newCount = prev + stepSize;
      setHistory((prevHistory) => [newCount, ...prevHistory].slice(0, 5));
      return newCount;
    });
  };

  const decrementCount = () => {
    setCount((prev) => {
      const newCount = prev - stepSize;
      setHistory((prevHistory) => [newCount, ...prevHistory].slice(0, 5));
      return newCount;
    });
  };

  const resetCount = () => {
    setCount(0);
    setHistory((prevHistory) => [0, ...prevHistory].slice(0, 5));
  };

  const updateStepSize = (steps: number) => {
    setStepSize(steps);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4">
      <h1 className="text-4xl mb-8">Counter App</h1>
      <Display count={count} stepsCount={stepSize} history={history} />
      <Counter
        increment={incrementCount}
        decrement={decrementCount}
        reset={resetCount}
        steps={updateStepSize}
      />
    </div>
  );
};

export default App;
