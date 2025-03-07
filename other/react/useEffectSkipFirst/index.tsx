/**
 * 要实现一个类似于 useEffect 的自定义钩子函数，但在第一次渲染时不执行回调函数
 */
import { useState } from 'react';
import { useRef, useEffect } from 'react';

export const useEffectSkipFirst = (callback: () => any, deps: unknown[]) => {
  const firstRef = useRef(true);
  useEffect(() => {
    if (firstRef.current) {
      firstRef.current = false;
      return;
    }

    return callback();
  }, deps);
};

function App() {
  const [count, setCount] = useState(0);

  useEffectSkipFirst(() => {
    console.log('111111', count);
  }, [count]);

  useEffect(() => {
    console.log('222');
  }, []);

  return (
    <>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
}

export default App;
