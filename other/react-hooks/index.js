import React from 'react';
import ReactDOM from 'react-dom';

const states = [];
let cursor = 0;

function useState(initialState) {
  const currenCursor = cursor;
  states[currenCursor] = states[currenCursor] || initialState;

  function setState(newState) {
    states[currenCursor] = newState;
    render();
  }

  ++cursor;

  return [states[currenCursor], setState];
}

const depsArr = [];
let effectCursor = 0;

function useEffect(cb, deps) {
  if (!depsArr[effectCursor]) {
    depsArr[effectCursor] = deps;
    cb();
    ++effectCursor;
    return;
  }

  const current = effectCursor;
  const beforeDeps = depsArr[current];
  const isChange = deps.some(
    (item, effectCursor) => item !== beforeDeps[effectCursor]
  );
  if (isChange) {
    cb();
  }
  ++effectCursor;
}

function App() {
  const [num, setNum] = useState(0);
  const [num2] = useState(1);

  // 每次点击按钮，都会触发 setNum 函数
  // 副作用检测到 num 变化，会自动调用回调函数
  useEffect(() => {
    console.log('num update: ', num);
  }, [num]);

  // 只会在compoentDidMount时，触发一次
  // 副作用函数不会多次执行
  useEffect(() => {
    console.log('num2 update: ', num2);
  }, [num2]);

  return (
    <div>
      <div>num: {num}</div>
      <div>
        <button onClick={() => setNum(num + 1)}>加 1</button>
        <button onClick={() => setNum(num - 1)}>减 1</button>
      </div>
    </div>
  );
}

function render() {
  ReactDOM.render(<App />, document.getElementById('root'));
  cursor = 0;
  effectCursor = 0;
}

render();
