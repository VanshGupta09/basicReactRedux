import React from "react";
import Addtodo from "./components/Addtodo";
import Todos from "./components/Todos";

const App = () => {
  return (
    <>
      <h1>Todos</h1>
      <Addtodo />
      <Todos />
    </>
  );
};

export default App;
