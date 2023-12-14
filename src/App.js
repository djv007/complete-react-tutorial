import Button from "./Button";
import React from "react";


const App = () => {
  // return "Hello from App"
  const handleClickAction = () => {
    console.log("I was clicked from parent");
  }
  return <Button data = {{a : {b : {c: 'c'}}}} clickAction={handleClickAction}>Click Me</Button>
}

export default App;
// to import it use import App from './App';

// called named export
export {App};
// to import it use import {App} from './App';
