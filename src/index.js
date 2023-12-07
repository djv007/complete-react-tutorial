import React from 'react';
import ReactDOM from 'react-dom';

// const root = document.getElementById('root');
// const p = document.createElement('p');
// p.innerText = "Hello from dj";

// root.appendChild(p);

const child1 = React.createElement('p' , {} , "I am a child1")
const child2 = React.createElement('p', {}, "I am a child2")
// const div = React.createElement('div', { className: 'text' }, [child1, child2])
console.log(div)
const div = <div className = 'text'>Hello 2 </div>
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(div)