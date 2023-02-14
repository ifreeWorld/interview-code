function createStore(reducer: any, initState: any) {
  var state = initState;
  var callbacks: Function[] = [];
  var store = {
    dispatch: (action: { type: string }) => {
      state = reducer(action, state);
      callbacks.forEach((cb) => {
        cb(state);
      });
    },
    getState: () => {
      return state;
    },
    subscribe: (cb: Function) => {
      callbacks.push(cb);
    },
  };
  return store;
}

var reducer1 = (action: { type: string }, state: any) => {
  switch (action.type) {
    case 'ADD':
      return {
        ...state,
        count: state.count + 1,
      };
    case 'REMOVE':
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
};

var reducer2 = (action: { type: string }, state: any) => {
  switch (action.type) {
    case 'ADD2':
      return {
        ...state,
        count2: state.count2 + 1,
      };
    case 'REMOVE2':
      return {
        ...state,
        count2: state.count2 - 1,
      };
    default:
      return state;
  }
};
var combineReducer = (reducers: Record<string, any>) => {
  return (action: { type: string }, state: Record<string, any>) => {
    return Object.keys(reducers).reduce((prev: Record<string, any>, next) => {
      prev[next] = reducers[next](action, state[next]);
      return prev;
    }, state);
  };
};

var store1 = createStore(
  combineReducer({
    reducer1,
    reducer2,
  }),
  { reducer1: { count: 1 }, reducer2: { count2: 10 } }
);
store1.subscribe((s: any) => {
  console.log(s);
  console.log(store1.getState());
});
store1.dispatch({
  type: 'ADD',
});
store1.dispatch({
  type: 'REMOVE',
});
store1.dispatch({
  type: 'ADD2',
});
store1.dispatch({
  type: 'REMOVE2',
});
