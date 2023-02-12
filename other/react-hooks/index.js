import React from 'react';
import ReactDOM from 'react-dom';

const memorizedState = [];
const sIndex = 0;

function useState(initState) {
  const curIndex = sIndex;
  memorizedState[curIndex] = memorizedState[curIndex] || initState;
  const setState = (v) => {
    memorizedState[curIndex] = v;
    // render()
  };
  sIndex++;
  return [memorizedState[curIndex], setState];
}

const memorizedDeps = [];
const eIndex = 0;

function useEffect(cb, deps) {
  const curIndex = eIndex;
  if (!memorizedEffect[curIndex]) {
    memorizedEffect[curIndex] = deps;
    cb();
    eIndex++;
  }
  const beforeDeps = memorizedEffect[curIndex];
  const hasChange = deps.some((dep, i) => {
    return beforeDeps[i] !== dep;
  });
  if (hasChange) {
    memorizedEffect[curIndex] = deps;
    cb();
  }
  eIndex++;
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
