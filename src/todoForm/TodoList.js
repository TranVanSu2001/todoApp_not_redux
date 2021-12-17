import React, { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";

import { Table, H2 } from "../UI/formCSS";
import "./TodoForm.css";

function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    const newTodos = [todo, ...todos];
    setTodos(newTodos, addTodo);
  };

  const updateTodo = (todoId, newValue) => {
    setTodos((items) =>
      items.map((item) => (item.id === todoId ? newValue : item))
    );
  };

  const removeTodo = (id) => {
    const removedArr = [...todos].filter((todo) => todo.id !== id);

    setTodos(removedArr);
  };

  return (
    <div className="TodoForm">
      <Table>
        <H2>What's the Plan for Today?</H2>
        <TodoForm onSubmit={addTodo} />

        <Todo todos={todos} removeTodo={removeTodo} updateTodo={updateTodo} />
      </Table>
    </div>
  );
}

export default TodoList;
