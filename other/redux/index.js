// 用例
const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_COUNT':
      return {
        ...state,
        count: state.count + 1,
      };
    case 'MINUS_COUNT':
      return {
        ...state,
        count: state.count - 1,
      };
  }
};
const store = createStore(reducer, { count: 0 });
console.log('直接输出', store.getState());

store.subscribe(() => {
  console.log('订阅1', store.getState());
});

store.dispatch({ type: 'ADD_COUNT' });
store.dispatch({ type: 'MINUS_COUNT' });

function createStore(reducer, initState) {
  let state = initState;
  const listens = [];

  const dispatch = (action) => {
    state = reducer(state, action);
    listens.forEach((listen) => {
      listen();
    });
  };

  const getState = () => {
    return state;
  };

  const subscribe = (l) => {
    listens.push(l);
  };

  return {
    dispatch,
    getState,
    subscribe,
  };
}
