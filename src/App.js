import Button from "./Button";
// import Text from "./Text";
import React, { lazy, Suspense, useMemo, useState, useRef, useCallback, useEffect} from "react";
import Timer from "./Timer";
import ButtonWithTooltip from "./ButtonWithTooltip";
import Input from './Input';
import SecondParent from './SecondParent'
import PrintTable from './PrintTable'

const Text = lazy(() => delayForDemo(import('./Text.js')));

function delayForDemo(promise) {
  return new Promise(resolve => {
    setTimeout(resolve, 2000);
  }).then(() => promise);
}

const App = () => {
  const [showText, toggleText] = useState(false)
  return <>
    <button onClick={() => { toggleText((prev) => !prev) }}>Toggle Text</button>

    {showText && <Suspense fallback={<div>I am loading</div>}>
      <Text>Hello guys!</Text>
    </Suspense>}
    </>
}

export default App;
// to import it use import App from './App';

export {App};

