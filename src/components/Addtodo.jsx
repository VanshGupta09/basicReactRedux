import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todoSlice";

const Addtodo = () => {
  // Define state variables to store form data
  const [formData, setFormData] = useState("");
  const dispatch = useDispatch();

  // Function to handle form input changes
  const handleInputChange = (e) => {
    setFormData(e.target.value);
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(formData));
    console.log(formData);
    setFormData("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="todo">Todo:</label>
        <input
          id="todo"
          name="message"
          value={formData}
          onChange={handleInputChange}
        ></input>
      <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default Addtodo;
