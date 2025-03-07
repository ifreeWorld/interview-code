import { useState } from 'react';
import './App.css';
import { useRef, useEffect } from 'react';
function A({ children }) {
  console.log('A');
  const [state, setState] = useState(0);
  useEffect(() => {
    setState((state) => state + 1);
  }, []);
  return children;
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
  console.log('App');
  return (
    <div>
      <A>
        <B />
      </A>
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
 * A
 */
