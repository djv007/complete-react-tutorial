import Button from "./Button";
import Text from "./Text";
import React, {useState} from "react";


const App = () => {
  // return "Hello from App"
  // const handleClickAction = () => {
  //   console.log("I was clicked from parent");
  // }
  // return <Button data = {{a : {b : {c: 'c'}}}} clickAction={handleClickAction}>Click Me</Button>

  const [data, setData] = useState([
    { id: 'a', text: "text 0" },
    { id: 'b', text: "text 1" },
    { id: 'c', text: "text 2" },
    { id: 'd', text: "text 3" },
    { id: 'e', text: "text 4" },
  ])

  const addMoreData = () => {
    // don't add in start , it's performance degradation , as it will call Text comp
    // each time even when it's not needed
    // to fix above thing use id in data[] as key and not the index as key 

    // setData((prevData) => [ { id: 'f', text: 'text 5' }, ...prevData]);

    
    setData((prevData) => [...prevData, {id : 'f' , text: 'text 5'}]);
  }

  return <>
  {data.map((item , index) => <Text key = {item.id}>{item.text}</Text>)}
    <Button clickAction={addMoreData}>Add more data</Button>
  </>
}

export default App;
// to import it use import App from './App';

// called named export
export {App};
// to import it use import {App} from './App';
