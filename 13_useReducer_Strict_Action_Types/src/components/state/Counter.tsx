import { useReducer } from "react";

type CounterState = {
  count: number;
};

type UpdateAction = {
  type: "increment" | "decrement";
  payload: number;
};

type ResetAction = {
  type: "reset";
};

type CounterAction = UpdateAction | ResetAction;

const initialState = { count: 0 };

function reducer(state: CounterState, action: CounterAction) {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.payload };
    case "reset":
      return initialState;
    case "decrement":
      return { count: state.count - action.payload };
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
