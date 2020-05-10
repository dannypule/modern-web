import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { TodoList } from "./TodoList";
import { createStore, StoreProvider, action } from "easy-peasy";

const store = createStore({
  todos: {
    items: ["Create store", "Wrap application", "Use store"],
    add: action((state, payload) => {
      state.items.push(payload);
    }),
  },
});

function App() {
  return (
    <StoreProvider store={store}>
      <TodoList />
    </StoreProvider>
  );
}

export default App;
