import Button from "./Button";
import Text from "./Text";
import React, { useMemo, useState, useRef, useCallback, useEffect} from "react";
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

  // below is interview ques : 
  // as myObj , arr are non primitive types and memo api do shallow comparison , so 
  // on each re-render if we don't use useMemo hook here in myObj or arr then these 2 will 
  // be re-created on each re-render and as they are passed in PrintTable , they will cause PrintTable to execute again as PrintTable ke props change honge and we don't want that
  // so we will use useMemo here in non primitive types like obj and arr .
  // this doesn' happen with primitive types like number or string like val here  
  const myObj = useMemo(() => { channel: "JS Cafe" }, [])
  // note : if myObj is state variable it won't cause re-render 
  // const [myObj, setMyObj] = useState({channel: "JS Cafe"})
  const arr = useMemo(() => (['a', 'b']), [])
  // const arr = ['a', 'b']
  const val = 10

  return <>
    Outer most parent:  <br />
    Counter1: {counter1} <button onClick={() => setCounter1((prev) => prev + 1)}>count1++</button>
    <br />
    Counter2: {counter2} <button onClick={() => setCounter2((prev) => prev + 1)}>count2++</button>
    <br />
    {/* <PrintTable num={counter1} obj={myObj} val={val}/> */}
    <PrintTable num={counter1} arr={arr} obj={myObj} val={val} />
    </>
}

export default App;
// to import it use import App from './App';

export {App};

