import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0); 

  const handleButtonClick = () => {
    setCount(count + 1);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Button Press Frequency Counter</h1>
      <h2>Button Pressed: {count} {count === 1 ? 'time' : 'times'}</h2>
      <button onClick={handleButtonClick} style={{ padding: '10px', fontSize: '16px' }}>
        Press Me
      </button>
    </div>
  );
};

export default Counter;
