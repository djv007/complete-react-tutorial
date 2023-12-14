import Button from "./Button";
import Text from "./Text";
import React, {useState , useCallback} from "react";


const App = () => {
  let [message, setData] = useState("Hello!, good morning");

  const changeMessage = useCallback(() => {
    // console.log("before update" , message);
    // setData(message);
    setData( (prevData) => {
      console.log("previous data : " , prevData);
      return "Hello!, good afternoon";
    })

    // even after update , message value will be older one as setData() is an async task
    // console.log("after update", message);

  }, [])

  return <>
  <div>{message}</div>
    {/* <button onClick={changeMessage}>Change Message</button> */}
    <Button clickAction={changeMessage}>Change Message</Button>
  </>
}

export default App;
// to import it use import App from './App';

export {App};

