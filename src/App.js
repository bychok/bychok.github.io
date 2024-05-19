import "./App.css";
import React, { useReducer } from "react";
// ------------------------------------------------{Step1: Import Hook}
const reducer = (state, action) => {
  // {Think of this as a playbook of all actions based on scenario}
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + 1,
        toggleText: state.toggleText,
      };
    // Think of this as Each Play to be executed
    case "DECREMENT":
      return {
        count: state.count - 1,
        toggleText: state.toggleText,
      };
    case "toggleText":
      return {
        count: state.count,
        toggleText: !state.toggleText,
      };
    default:
      return state;
  }
};
// Define reducer which allows you to make a switch statement for each case of how your state can be changed

function App() {
  // const [whateverState, setWhateverState] = useState()
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    toggleText: true,
  });
  // ------------------------------------------{Step 2: Create state Variable, Create DISPATCH* ---> reducer which contains our current State}

  return (
    <div className="App">
      <>
        <div>Current Count: {state.count}</div>
        <div>
          <button
            onClick={() => {
              dispatch({ type: "DECREMENT" });
            }}
          >
            {" "}
            -{" "}
          </button>
          <button
            onClick={() => {
              dispatch({ type: "INCREMENT" });
            }}
          >
            {" "}
            +{" "}
          </button>
        </div>
        <hr />
        <button
          onClick={() => {
            dispatch({ type: "toggleText" });
          }}
        >
          Hide
        </button>
        <div>{state.toggleText && <p> This Text is Visible</p>}</div>
      </>
    </div>
  );
}

export default App;
