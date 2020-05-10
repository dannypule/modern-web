import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useMachine } from "@xstate/react";
import { Machine } from "xstate";

const toggleMachine = new Machine({
  id: "toggleMachine",
  initial: "inactive",
  states: {
    inactive: {
      on: {
        TOGGLE: "active",
      },
    },
    active: {
      on: {
        TOGGLE: "inactive",
      },
    },
  },
});

function App() {
  const [current, send] = useMachine(toggleMachine);

  console.log(current); // eslint-disable-line

  return (
    <div>
      <button
        onClick={() => {
          send("TOGGLE");
        }}
      >
        {current.value}
      </button>

      <br />

      {current.matches("active") && <span>We are active</span>}
      {current.matches("inactive") && <span>We are inactive</span>}
    </div>
  );
}

export default App;
