interface DisplayProps {
  count: number;
  stepsCount: number;
  history: number[];
}

const Display = ({ count, stepsCount, history }: DisplayProps) => {
  return (
    <div className="text-center mb-8">
      <p className="text-6xl mb-4">
        {count > 10 || count < -10 ? "Out of range!" : count}
      </p>
      <p className="text-xl mb-4">Step Size: {stepsCount}</p>
      {history.length > 0 && (
        <div className="mt-6">
          <p className="text-sm mb-2">Last 5 Steps:</p>
          <p className="text-lg">{history.join(" → ")}</p>
        </div>
      )}
    </div>
  );
};

export default Display;
