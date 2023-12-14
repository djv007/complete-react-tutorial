import React, {memo} from "react";

const Text = memo((props) => {
  console.log("props" , props);
  const {children} = props;
  return <div>{children}</div>;
})

export default Text;