import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../redux/todoSlice";

const Todos = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  return (
    <>
      <div className="list">
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button
              onClick={() => {
                dispatch(removeTodo(todo.id));
              }}
            >
              Del
            </button>
          </li>
        ))}
      </div>
    </>
  );
};

export default Todos;
