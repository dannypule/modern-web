import React from "react";
import { useMachine } from "@xstate/react";
import { Machine } from "xstate";

// https://xstate.js.org/docs/guides/typescript.html#config-objects

interface LightStateSchema {
  states: {
    green: {};
    yellow: {};
    red: {
      states: {
        walk: {};
        wait: {};
        stop: {};
      };
    };
  };
}

type LightEvent =
  | { type: "TIMER" }
  | { type: "POWER_OUTAGE" }
  | { type: "PED_COUNTDOWN"; duration: number };

interface LightContext {
  elapsed: number;
}

const lightMachine = Machine<LightContext, LightStateSchema, LightEvent>({
  key: "light",
  initial: "green",
  context: { elapsed: 0 },
  states: {
    green: {
      on: {
        TIMER: "yellow",
        POWER_OUTAGE: "red",
      },
    },
    yellow: {
      on: {
        TIMER: "red",
        POWER_OUTAGE: "red",
      },
    },
    red: {
      on: {
        TIMER: "green",
        POWER_OUTAGE: "red",
      },
      initial: "walk",
      states: {
        walk: {
          on: {
            PED_COUNTDOWN: "wait",
          },
        },
        wait: {
          on: {
            PED_COUNTDOWN: {
              target: "stop",
              cond: (context, event) => {
                return event.duration === 0 && context.elapsed > 0;
              },
            },
          },
        },
        stop: {
          on: {
            // Transient transition
            "": { target: "#light.green" },
          },
        },
      },
    },
  },
});

function App() {
  const [current, send] = useMachine(lightMachine);

  console.log(current); // eslint-disable-line

  return (
    <div className="App">
      <button onClick={() => send("TIMER")}>TIMER</button>
      <button onClick={() => send("POWER_OUTAGE")}>POWER_OUTAGE</button>
      <button onClick={() => send("PED_COUNTDOWN")}>PED_COUNTDOWN</button>
      <div
        style={{
          height: 200,
          width: 200,
          backgroundColor: current.value as string,
        }}
      />
    </div>
  );
}

export default App;
