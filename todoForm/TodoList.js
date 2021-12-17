import React, { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";

import { Table, H2 } from "../UI/formApp";
import "./TodoForm.css";

function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      // không có gì thì return 0
      return;
    }

    const newTodos = [todo, ...todos];
    setTodos(newTodos, addTodo);
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    );
  };

  const removeTodo = (id) => {
    const removedArr = [...todos].filter((todo) => todo.id !== id);

    setTodos(removedArr);
  };

  return (
    <div className="TodoForm">
      <Table>
        <H2>What are you doing today ?</H2>
        <TodoForm onSubmit={addTodo} />

        <Todo todos={todos} removeTodo={removeTodo} updateTodo={updateTodo} />
      </Table>
    </div>
  );
}

export default TodoList;
