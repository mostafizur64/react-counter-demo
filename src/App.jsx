import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [displayInput, setDisplayInput] = useState(false);
  const [newValue, setNewValue] = useState('');

  const decreaseValue = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const increaseValue = () => {
    setCount(count + 1);
  };

  const resetCounter = () => {
    setCount(0);
  };

  const setValue = () => {
    const parsedValue = parseInt(newValue);
    if (!isNaN(parsedValue)) {
      setCount(parsedValue);
      setNewValue('');
      setDisplayInput(false);
    }
  };

  return (
    <div style={{ border: 'red', backgroundColor: 'orange', padding: '5px' }}>
      <h2>Tally Count</h2>
      <input type="text" name="value" value={count} readOnly />
      <div>
        <button onClick={decreaseValue}>-</button>
        <button onClick={increaseValue}>+</button>
      </div>
      {displayInput ? (
        <div>
          <input type="text" name="newValue" value={newValue} onChange={(e) => setNewValue(e.target.value)} />
          <button onClick={setValue}>Set</button>
        </div>
      ) : (
        <button onClick={() => setDisplayInput(true)}>Set value</button>
      )}
      <button onClick={resetCounter}>Reset Counter</button>
      <button>Counter Name</button>
    </div>
  );
}

export default App;
