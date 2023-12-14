import Button from "./Button";
import Text from "./Text";
import React, {useState , useCallback, useEffect} from "react";
import Timer from "./Timer";


const App = () => {
  // const [data1, setData1] = useState(0);
  // const [data2, setData2] = useState(0);

  // useEffect( () => {
  //   console.log("data 1 changed");
  // }, [data1]);

  // useEffect(() => {
  //   console.log("data 2 changed");
  // }, [data2]);

  const [showTimer , toggleTimer] = useState(true);
  return <>
  {showTimer && <Timer customText = "this is a good clock"/>}
    <button onClick={() => toggleTimer(!showTimer)}>Toggle timer from app</button>
  </>

  // return <>
  //   <Text externalData = {data1}></Text>
  //   <br />
  //   <button onClick={() => setData1( (prevData) => prevData + 1)}>Update 1</button>

  //   <br/>

  //   <Text externalData={data2}></Text>
  //   <br />
  //   <button onClick={() => setData2((prevData) => prevData + 1)}>Update 2</button>
  // </>
}

export default App;
// to import it use import App from './App';

export {App};

