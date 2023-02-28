import './App.css';
import React, { useState, useEffect } from 'react';
import Resultado from './Resultado';

function App() {

  const [valueA, setValueA] = useState("");
  const [valueB, setValueB] = useState("");
  const [result, setResult] = useState("");

  // const [buttomSum, setButtomSum] = useState(false);
  // const [buttomMinus, setButtomMinus] = useState(false);
  // const [buttomMult, setButtomMult] = useState(false);
  // const [buttomDiv, setButtomDiv] = useState(false);
  const [operatorsState, setOperatorsState] = useState([
    {"value": "sum", "operating": false},
    {"value": "minus", "operating": false},
    {"value": "mult", "operating": false},
    {"value": "div", "operating": false}
  ])
  
  useEffect(() => {
    operate();
  }, [valueA, valueB, operatorsState])
 
  const valueAHandler = (event) => {
    let aux = event.target.value;
    if(!isNaN(aux)) {
      console.log("A");
      setValueA(aux)
    }
    else {
      console.log("is not a number")
    }
  }
  const valueBHandler = (event) => {
    let aux = event.target.value;
    if(!isNaN(aux)) {
      console.log("B");
      setValueB(aux);
    }
    else {
      console.log("is not a number")
    }
  }
  const changeOperation = (event) => {
    let items = [...operatorsState];
    items.map((item, i) => {
      if(item.value === event.target.name) {
        item.operating = true;
      }
      else{
        item.operating = false;
      }
    })
    setOperatorsState(items);
  }
  const operate = (event) => {
    let operate = "";
    operatorsState.map((item, i) => {
      if(item.operating) {
        operate = item.value
      }
    })
    if(operate === "sum") {
      setResult(Number(valueA) + Number(valueB))
    }
    else if(operate === "minus") {
      setResult(Number(valueA) - Number(valueB))
    }
    else if(operate === "mult") {
      setResult(Number(valueA) * Number(valueB))
    }
    else if(operate === "div") {
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
        <input onChange={valueAHandler} type="number" className="input" placeholder="Insert numeric value..."></input>
      </div>
      <div className="input">
        <h1>B: </h1>
        <input onChange={valueBHandler} type="number" className="input" placeholder="Insert numeric value..."></input>
      </div>
      <div className="operators">
        <button className={[operatorsState[0].operating ? "activated" : "button"]} onClick={changeOperation} name="sum">+</button>
        <button className={[operatorsState[1].operating ? "activated" : "button"]} onClick={changeOperation} name="minus">-</button>
        <button className={[operatorsState[2].operating ? "activated" : "button"]} onClick={changeOperation} name="mult">x</button>
        <button className={[operatorsState[3].operating ? "activated" : "button"]} onClick={changeOperation} name="div">/</button>
      </div>

      <Resultado value={result} className="result"></Resultado>
    </div>
  );
}

export default App;
