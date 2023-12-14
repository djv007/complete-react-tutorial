import React, { forwardRef } from 'react';

// Here as we are using forwardRef so we have to use 2 mandatory paramaters here props , ref
// ref will have ref we pass from parent 
const Input = forwardRef((props,ref) => {
  console.log("input box props are: ", props)
  return <input ref={ref} type="text"/>
})

export default Input;