interface CounterProps {
  increment: () => void;
  decrement: () => void;
  reset: () => void;
  steps: (stepsCount: number) => void;
}

const Counter = ({ increment, decrement, reset, steps }: CounterProps) => {
  return (
    <div className="text-center">
      <div className="flex gap-4 mb-6">
        <button onClick={increment} className="text-2xl px-4 py-2">
          +
        </button>
        <button onClick={decrement} className="text-2xl px-4 py-2">
          -
        </button>
        <button onClick={reset} className="text-xl px-4 py-2">
          Reset
        </button>
      </div>
      <div>
        <input
          type="number"
          placeholder="Step size"
          onChange={(e) => steps(Number(e.target.value))}
          className="border border-black px-4 py-2 text-center"
        />
      </div>
    </div>
  );
};

export default Counter;
