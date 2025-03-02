// src/components/Counter.jsx
import React, { useState } from 'react';

const Counter = () => {
  // Initialize state for the count
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      {/* Display the current count */}
      <p style={{ fontSize: '24px', fontWeight: 'bold' }}>Current Count: {count}</p>

      {/* Buttons for increment, decrement, and reset */}
      <button
        style={{ margin: '5px', padding: '10px 20px', fontSize: '16px' }}
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
      <button
        style={{ margin: '5px', padding: '10px 20px', fontSize: '16px' }}
        onClick={() => setCount(count - 1)}
      >
        Decrement
      </button>
      <button
        style={{ margin: '5px', padding: '10px 20px', fontSize: '16px' }}
        onClick={() => setCount(0)}
      >
        Reset
      </button>
    </div>
  );
};

export default Counter;