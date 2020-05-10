import React from "react";
import { useStoreState, useStoreActions, action } from "easy-peasy";

export function TodoList() {
  const todos = useStoreState((state) => state.todos.items);
  const add = useStoreActions((actions) => actions.todos.add);

  return (
    <div>
      <button onClick={() => add(`${new Date()}`)}>Add current time</button>
      <br />
      <br />
      {todos.map((todo, idx) => (
        <div key={idx}>{todo}</div>
      ))}
    </div>
  );
}
