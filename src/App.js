import Button from "./Button";
// import Text from "./Text";
import React, { lazy, Suspense, useMemo, useState, useRef, useCallback, useEffect} from "react";
import Timer from "./Timer";
import ButtonWithTooltip from "./ButtonWithTooltip";
import Input from './Input';
import SecondParent from './SecondParent'
import PrintTable from './PrintTable'
import Heading from './Heading';
import Navbar from './Navbar';
import { ThemeContext } from './context'
import { createPortal } from 'react-dom';

const Text = lazy(() => delayForDemo(import('./Text.js')));

function delayForDemo(promise) {
  return new Promise(resolve => {
    setTimeout(resolve, 2000);
  }).then(() => promise);
}

const App = () => {
  const [showModal, toggleModal] = useState(false);
  return <>
      Hey i am inside root <button onClick={() => toggleModal((prev) => !prev)}>Toggle Modal</button>

      {showModal && createPortal(<div>This is modal content</div>, document.body)}
      {/* {showModal && <div>This is modal content</div>} */}
    </>
}

export default App;
// to import it use import App from './App';

export {App};

