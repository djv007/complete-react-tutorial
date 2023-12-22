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

const Text = lazy(() => delayForDemo(import('./Text.js')));

function delayForDemo(promise) {
  return new Promise(resolve => {
    setTimeout(resolve, 2000);
  }).then(() => promise);
}

const App = () => {
  const [theme, setTheme] = useState('dark');
  return <ThemeContext.Provider value={[theme, setTheme]}>
    <Navbar />
    <Heading />
  </ThemeContext.Provider>
}

export default App;
// to import it use import App from './App';

export {App};

