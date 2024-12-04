import { useState } from "react";

export default function UseState() {
  const [counter, setCounter] = useState(0);

  const addCount = () => {
    // setCounter((count) => {
    //   return count + 1;
    // });
    setCounter((prevCounter) => prevCounter + 4);
  };
  const subCount = () => {
    // setCounter((count) => {
    //   return count + 1;
    // });

    if (counter > 0) {
      setCounter((prevCounter) => prevCounter - 4);
    } else {
      alert(`the value is below 0`);
    }
  };
  return (
    <div>
      <h4>count Value:{counter}</h4>
      <button onClick={addCount}>Add count</button>
      <button onClick={subCount}>Sub Count</button>
    </div>
  );
}
