import Button from "./Button";
import Text from "./Text";
import React, { useState, useRef, useCallback, useEffect} from "react";
import Timer from "./Timer";
import ButtonWithTooltip from "./ButtonWithTooltip";
import Input from './Input';
import SecondParent from './SecondParent'
import PrintTable from './PrintTable'


const App = () => {
  // const [count1, setCount] = useState(0)
  // const [count2, setCount2] = useState(0)
  // const handleClick = () => {
  //   setCount((prev) => prev + 1)
  //   console.log("I am parent count 1")
  // }
  // const handleClick2 = () => {
  //   setCount2((prev) => prev + 1)
  //   console.log("I am parent count 2")
  // }

  const [counter1, setCounter1] = useState(0)
  const [counter2, setCounter2] = useState(0)

  return <>
    Outer most parent:  <br />
    Counter1: {counter1} <button onClick={() => setCounter1((prev) => prev + 1)}>count1++</button>
    <br />
    Counter2: {counter2} <button onClick={() => setCounter2((prev) => prev + 1)}>count2++</button>
    <br />
    <PrintTable num={counter1} />
    </>
}

export default App;
// to import it use import App from './App';

export {App};

