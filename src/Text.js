import React, {memo, useEffect} from "react";

const Text = memo((props) => {
  const {children, externalData} = props;
  useEffect(() => {
    console.log("external Data changed", externalData);
  }, [externalData]);

  return <div>{externalData}{children}</div>;
})

export default Text;