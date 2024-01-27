import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(1);
  function increaseCount(newCount) {
    setCount((prevCount) => prevCount + newCount);
  }
  function decreaseCount(newCount) {
    if (count > 0) {
      setCount((prevCount) => prevCount - newCount);
    }
  }
  return (
    <div id="parent">
      <div className="counter">Count: {count}</div>
      <button onClick={() => increaseCount(1)}>Increase Count +</button>
      <button onClick={() => decreaseCount(1)}>Decrease Count -</button>
    </div>
  );
}
