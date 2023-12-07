import React from 'react';
import ReactDOM from 'react-dom/client';

// const root = document.getElementById('root');
// const p = document.createElement('p');
// p.innerText = "Hello from dj";

// root.appendChild(p);
// const apiData = 'hello from API'
 const handleClick = (state) => {
  console.log("Handle click called", state);
}
const isMorning = true
const morningText = 'Morning user'
const afternoonText = 'Afternoon user'
const morningElement = <div>{morningText} <span onClick={() => handleClick(isMorning)}>It's 8 am</span> </div>
const asfternoonElement = <div>{afternoonText} It's 2 pm </div>
const greetingElement = isMorning ? morningElement:asfternoonElement

const GreetingComponent = function () {
  // return greetingElement + 'Inside component'
  return <>
    {greetingElement}
    Inside component
  </>

}
console.log(GreetingComponent);
const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(GreetingComponent())
root.render(<GreetingComponent></GreetingComponent>)
