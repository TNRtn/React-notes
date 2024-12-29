import React, { useReducer } from 'react';

// Initial state
const initialState = {
  counter1: 0,
  counter2: 0,
};

// Reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case 'increment1':
      return { ...state, counter1: state.counter1 + action.value };
    case 'decrement1':
      return { ...state, counter1: state.counter1 - action.value };
    case 'increment2':
      return { ...state, counter2: state.counter2 + action.value };
    case 'decrement2':
      return { ...state, counter2: state.counter2 - action.value };
    case 'reset':
      return initialState;
    default:
      return state;
  }
};

function ReducerTwoCounters() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>Counter 1: {state.counter1}</h1>
      <button onClick={() => dispatch({ type: 'increment1', value: 1 })}>
        Increment Counter 1
      </button>
      <button onClick={() => dispatch({ type: 'decrement1', value: 1 })}>
        Decrement Counter 1
      </button>

      <h1>Counter 2: {state.counter2}</h1>
      <button onClick={() => dispatch({ type: 'increment2', value: 1 })}>
        Increment Counter 2
      </button>
      <button onClick={() => dispatch({ type: 'decrement2', value: 1 })}>
        Decrement Counter 2
      </button>

      <button onClick={() => dispatch({ type: 'reset' })}>Reset Both Counters</button>
    </div>
  );
}

export default ReducerTwoCounters;
