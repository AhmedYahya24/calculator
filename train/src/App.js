import React, { useState } from 'react';
import './App.css';

function App() {
  // state
  const [num, setNum] = useState(0);
  const [oldnum, setOldnum] = useState(0);
  const [operator, setOperator] = useState('');

  // functions
  const clear = () => setNum(0);
  const changeSigne = () => setNum(num * -1);
  const percentage = () => setNum(num/100);
  const decimal = () => setNum(num + '.');

  const handleClick = (e) => {
    const input = e.target.value;
    input === 0 ? setNum(input) : setNum(num + input) ;
    }

    const handleOperator = (e) => {
      const operatorInput = e.target.value;
      setOperator(operatorInput)
      setOldnum(num)
      setNum(0)
    }

    const calculate = () => {
      if (operator === "/") {
        setNum(oldnum / num);
      } else if (operator === "X") {
        setNum(oldnum * num);
      } else if (operator === "-") {
        setNum(oldnum - num);
      } else if (operator === "+") {
        setNum(oldnum + num);
      } 
    }
    



  return (
    <div className="container">
      <div className='result-space'>
        {num}
      </div>
      <div className='num-space'>
        <div>
          <div className='numbers-container'>
            <button className="btn btn-set" onClick={clear}>AC</button>
            <button className="btn btn-set" onClick={changeSigne}>+/-</button>
            <button className="btn btn-set" onClick={percentage}>%</button>
          </div>
          <div className='numbers-container'>
          <button className="btn" value={7} onClick={handleClick} >7</button>
          <button className="btn" value={8} onClick={handleClick}>8</button>
          <button className="btn" value={9} onClick={handleClick}>9</button>
          <button className="btn" value={4} onClick={handleClick}>4</button>
          <button className="btn" value={5} onClick={handleClick}>5</button>
          <button className="btn" value={6} onClick={handleClick}>6</button>
          <button className="btn" value={1} onClick={handleClick}>1</button>
          <button className="btn" value={2} onClick={handleClick}>2</button>
          <button className="btn" value={3} onClick={handleClick}>3</button>
          <button className="btn btn-zero" value={0} onClick={handleClick}>0</button>
          <button className="btn" value={"."} onClick={decimal}>.</button>
          </div>
        </div>
        <div className='operations-container'>
          <button className='btn btn-operation' value={"/"} onClick={handleOperator}>/</button>
          <button className='btn btn-operation' value={"X"} onClick={handleOperator}>X</button>
          <button className='btn btn-operation' value={"-"} onClick={handleOperator}>-</button>
          <button className='btn btn-operation' value={"+"} onClick={handleOperator}>+</button>
          <button className='btn btn-operation' value={"="} onClick={calculate}>=</button>
        </div>
      </div>
    </div>
    
  );
}

export default App;
