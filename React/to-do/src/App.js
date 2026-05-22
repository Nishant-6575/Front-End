import React from "react";
import Counter from "./redux/counter/Counter";
import CountZero from "./redux/counter/CountZero";
import TodoList from "./redux/todo/TodoList";
import TodoAdd from "./redux/todo/TodoAdd";

function App() {
  return (
    <div>
      <h1>Hello</h1>

      <Counter />
      <CountZero />

      <TodoAdd/>
      <TodoList/>
    </div>
  );
}

export default App;
