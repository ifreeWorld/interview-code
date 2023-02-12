function createStore(
  reducer: Function,
  initState: any
): {
  dispatch: (action: any) => void;
  subscribe: (cb: (s: any) => void) => void;
  getState: () => any;
} {
  let state = initState;
  let callbacks: ((s: any) => void)[] = [];
  let store = {
    dispatch: (action: any) => {
      state = reducer(state, action);
      callbacks.forEach((cb) => {
        cb(state);
      });
    },
    subscribe: (cb: (s: any) => void) => {
      callbacks.push(cb);
    },
    getState: () => {
      return state;
    },
  };
  return store;
}

const reducer = (state: any, { type }: { type: 'ADD' | 'REMOVE' }) => {
  if (type === 'ADD') {
    return {
      ...state,
      count: state.count + 1,
    };
  }
  if (type === 'REMOVE') {
    return {
      ...state,
      count: state.count - 1,
    };
  }
};

const store = createStore(reducer, {
  count: 1,
});
store.subscribe((s) => {
  console.log(store.getState(), s);
});

store.dispatch({
  type: 'ADD',
});
store.dispatch({
  type: 'ADD',
});
store.dispatch({
  type: 'REMOVE',
});
