import { useState } from 'react';
import './App.css';
import { useRef, useEffect } from 'react';
function A() {
  console.log('A');
  return <B />;
}

function B() {
  console.log('B');
  return <C />;
}

function C() {
  console.log('C');
  return null;
}

function D() {
  console.log('D');
  return null;
}

function App() {
  const [state, setState] = useState(0);
  useEffect(() => {
    setState((state) => state + 1);
  }, []);
  console.log('App');
  return (
    <div>
      <A state={state} />
      <D />
    </div>
  );
}

export default App;

/**
 * 结果：
 * App
 * A
 * B
 * C
 * D
 * App
 * A
 * B
 * C
 * D
 */
