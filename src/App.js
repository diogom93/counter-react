import React from 'react';
import {useState} from 'react'
import Button from './components/Button';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const incrementCounter = increment => {
    setCount(count + increment);
  };

  const resetCounter = () => {
    setCount(0);
  };

  return (
    <div className="App">
      <Button label="+1" value={1} onClickFunction={incrementCounter}></Button>
      <Button label="+10" value={10} onClickFunction={incrementCounter}></Button>
      <Button label="+100" value={100} onClickFunction={incrementCounter}></Button>
      <Button label="+1000" value={1000} onClickFunction={incrementCounter}></Button>
      <Button label="Reset" onClickFunction={resetCounter}></Button>
      <span>{count}</span>
    </div>
  );
}

export default App;
