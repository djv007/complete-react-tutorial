import React, { useCallback } from 'react';
import ThirdParent from './ThirdParent';
const SecondParent = (props) => {
  const {count} = props;
  // wrapping myFunction in useCallback to prevent re-creation of myFunction on different re-renders of SecondParent and hence preventing slow down
  const myFunction = useCallback(() => {
    console.log("my function called")
  }, [])


  // as myFunction is wrapped in useCallback so it will not re-create myFunction and hence not slow down parent comp
  const handleChange = useCallback(() => {
    console.log("hey hey haha")
    myFunction()
  }, [myFunction])

  // vahi kahani written in notes if count from parent will change then it will cause
  // handleChange2() to recreate and as handleChange2() is passed as a prop to ThirdParent, ThirdParent will re-render itself
  // const handleChange2 = useCallback(() => {
  //   console.log("hey hey haha , the count is now", count)
  //   myFunction()
  // }, [count])

  return <>
    I am second parent
    <br />
    <ThirdParent handleChange={handleChange} />
    {/* <ThirdParent handleChange={handleChange2} /> */}
  </>
}

export default SecondParent;