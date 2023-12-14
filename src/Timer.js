import React, { useState, useEffect, useRef } from "react";


const Timer = (props) => {
  const { customText } = props;
  const [counter, setCounter] = useState(true);
  const interval = useRef(null)

  useEffect( () => {
     interval.current = setInterval(() => {
      console.log("I m running setinterval");
      setCounter((prevCounter) => prevCounter + 1);
    }, 1000);

    console.log("Created an interval with id" , interval);
    // this is a clean up func , will execute on unmount of the component 
    return () => {
      console.log("I was unmounted");
      clearInterval(interval.current);
      console.log("cleared an interval with id", interval);
    }
  }, []);

  const stopTimer = () => {
    console.log("stopping timer for id ", interval.current)
    clearInterval(interval.current)
  }

  return <>
  <span>Current time is : {counter}</span>
  <br/>
    <span>{customText}</span>
    <br/>
    <button onClick={stopTimer}>Stop Timer</button>
  </>
}

export default Timer;