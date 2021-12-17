import React, { useState } from "react";
import TodoForm from "./TodoForm";
import {
  TodoLists,
  TodoItem,
  ContentItem,
  Icon,
  DeleteIcon,
  EditIcon,
} from "../UI/formCSS";

const Todo = ({ todos, removeTodo, updateTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo, index) => (
    <TodoLists key={index}>
      <TodoItem className="TodoItem">
        <ContentItem>{todo.text}</ContentItem>
        <Icon>
          <DeleteIcon onClick={() => removeTodo(todo.id)}></DeleteIcon>
          <EditIcon
            onClick={() => setEdit({ id: todo.id, value: todo.text })}
          ></EditIcon>
        </Icon>
      </TodoItem>
    </TodoLists>
  ));
};
export default Todo;
