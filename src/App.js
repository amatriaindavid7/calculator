import './App.css';
import React, { useState } from 'react';

function App() {

  const [valueA, setValueA] = useState("");
  const [valueB, setValueB] = useState("");
  const [result, setResult] = useState("");
 
  const valueAHandler = (event) => {
    let aux = event.target.value;
    if(!isNaN(aux)) {
      setValueA(aux);
    }
    else {
      console.log("is not a number")
    }
  }
  const valueBHandler = (event) => {
    let aux = event.target.value;
    if(!isNaN(aux)) {
      setValueB(aux);
    }
    else {
      console.log("is not a number")
    }
  }
  const operate = (event) => {
    if(event.target.name === "sum") {
      setResult(Number(valueA) + Number(valueB))
    }
    else if(event.target.name === "minus") {
      setResult(Number(valueA) - Number(valueB))
    }
    else if(event.target.name === "mult") {
      setResult(Number(valueA) * Number(valueB))
    }
    else if(event.target.name === "div") {
      setResult(Number(valueA) / Number(valueB))
    }
  }


  return (
    <div className="App">
      <h1>
        Welcome to the calculator exercise
      </h1>

      <div className="input">
        <h1>A: </h1>
        <input value={valueA} onChange={valueAHandler} type="text" className="input" placeholder="Insert numeric value..."></input>
      </div>
      <div className="input">
        <h1>B: </h1>
        <input value={valueB} onChange={valueBHandler} type="text" className="input" placeholder="Insert numeric value..."></input>
      </div>
      <div className="operators">
        <button className="button" onClick={operate} name="sum">+</button>
        <button className="button" onClick={operate} name="minus">-</button>
        <button className="button" onClick={operate} name="mult">x</button>
        <button className="button" onClick={operate} name="div">/</button>
      </div>

      <div className="result">
        <h1>Result: {result}</h1>
      </div>

    </div>
  );
}

export default App;
