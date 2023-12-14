import Button from "./Button";
import Text from "./Text";
import React, {useState , useCallback, useEffect} from "react";
import Timer from "./Timer";
import ButtonWithTooltip from "./ButtonWithTooltip";


const App = () => {
  // const [data1, setData1] = useState(0);
  // const [data2, setData2] = useState(0);

  // useEffect( () => {
  //   console.log("data 1 changed");
  // }, [data1]);

  // useEffect(() => {
  //   console.log("data 2 changed");
  // }, [data2]);

  // const [showTimer , toggleTimer] = useState(true);
  return <>
    <ButtonWithTooltip
      tooltipContent={
        <div>
          This tooltip does not fit above the button.
          <br />
          This is why it's displayed below instead!
        </div>
      }
    >
      Hover over me (tooltip above)
    </ButtonWithTooltip>
    <div style={{ height: 50 }} />
    <ButtonWithTooltip
      tooltipContent={
        <div>This tooltip fits above the button</div>
      }
    >
      Hover over me (tooltip below)
    </ButtonWithTooltip>
    <div style={{ height: 50 }} />
    <ButtonWithTooltip
      tooltipContent={
        <div>This tooltip fits above the button</div>
      }
    >
      Hover over me (tooltip below)
    </ButtonWithTooltip>
  </>
}

export default App;
// to import it use import App from './App';

export {App};

