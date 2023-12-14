import React, { useState, useEffect } from "react";


const Timer = (props) => {
  const { customText } = props;
  const [counter, setCounter] = useState(true);

  useEffect( () => {
    const interval = setInterval(() => {
      console.log("I m running setinterval");
      setCounter((prevCounter) => prevCounter + 1);
    }, 1000);

    console.log("Created an interval with id" , interval);
    // this is a clean up func , will execute on unmount of the component 
    return () => {
      console.log("I was unmounted");
      clearInterval(interval);
      console.log("cleared an interval with id", interval);
    }
  }, []);

  useEffect( () => {
    return () =>  {
      console.log("Cleaning up 2nd effect for customText");
    }
  }, [customText]);

  useEffect(() => {
    console.log("I am rendering again and again");
    return () => {
      console.log("Cleaning up 3rd effect");
    }
  });

  return <>
  <span>Current time is : {counter}</span>
  <br/>
    <span>{customText}</span>
    <br/>
  </>
}

export default Timer;