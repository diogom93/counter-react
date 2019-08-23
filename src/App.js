import React from 'react';
import {useState} from 'react'
import Button from './components/Button';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const incrementCounter = increment => {
    setCount(count + increment);
  };

  return (
    <div className="App">
      <Button increment={1} onClickFunction={incrementCounter}></Button>
      <Button increment={10} onClickFunction={incrementCounter}></Button>
      <Button increment={100} onClickFunction={incrementCounter}></Button>
      <Button increment={1000} onClickFunction={incrementCounter}></Button>
      <span>{count}</span>
    </div>
  );
}

export default App;
