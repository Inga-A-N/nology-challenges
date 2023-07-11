import React, { useState } from "react";

const Counter = ({ initialCount = 0 }) => {
  const [count, setCount] = useState(initialCount);
  const onIncrementClick = () => {
    setCount(count + 1);
  };

  const onDecrementClick = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h3>Count is: {count}</h3>
      <button onClick={onDecrementClick}>-</button>
      <button onClick={onIncrementClick}>+</button>
    </div>
  );
};

export default Counter;
