import { useReducer } from "react";

type CounterState = {
  count: number;
};

type UpdateAction = {
  type: "increment" | "decrement"; // adding literal type  for stricter choice
  payload: number;
};

type ResetAction = {
  type: "reset";
};

const initialState = { count: 0 };

// using discriminated union to handle useReducer with TypeScript

function reducer(state: CounterState, action: UpdateAction | ResetAction) {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.payload };
    case "decrement":
      return { count: state.count - action.payload };
    case "reset":
      return initialState;
    default:
      return state;
  }
}

export const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <h1>Count: {state.count}</h1>
      <br />
      <button onClick={() => dispatch({ type: "increment", payload: 10 })}>
        Increment by 10
      </button>
      &nbsp;
      <button onClick={() => dispatch({ type: "reset" })}> Reset</button> &nbsp;
      <button onClick={() => dispatch({ type: "decrement", payload: 10 })}>
        Decrement by 10
      </button>
    </>
  );
};
