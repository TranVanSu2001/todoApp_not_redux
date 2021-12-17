import React, { useState, useEffect, useRef } from "react";
// import { ThemeProvider } from "styled-components";
import { FormInput, TodoInput, TodoAddBtn } from "../UI/formApp";
import "./TodoForm.css";

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });

    setInput("");
    console.log(input);
  };

  return (
    <FormInput onSubmit={handleSubmit}>
      {props.edit ? (
        <>
          <TodoInput
            type="text"
            placeholder="Update your item"
            value={input}
            name="text"
            onChange={handleChange}
            ref={inputRef}
          ></TodoInput>
          <TodoAddBtn>Update</TodoAddBtn>
        </>
      ) : (
        <>
          <TodoInput
            type="text"
            placeholder="Add a todo ok"
            value={input}
            name="text"
            onChange={handleChange}
            ref={inputRef}
          ></TodoInput>
          <TodoAddBtn>Add todos</TodoAddBtn>
        </>
      )}
    </FormInput>
  );
}

export default TodoForm;

/* {/* <TodoInput
        placeholder="Add a todo"
        id="todo-input"
        todos={todos}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      ></TodoInput>
      <TodoAddBtn>Add Todo</TodoAddBtn> */
