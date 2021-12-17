// import { createStore } from "redux";
// // import todoReducer from "./state";
// import { todoInput, todoList } from "../todoForm/TodoForm";

// console.log(todoList);

// const initialState = ["fff", "asdfas"];

// const todoReducer = (state = initialState, action) => {
//   return state;
// };

// export const store = createStore(todoReducer);

// Render todo TodoList

// const renderTodoList = (todoList) => {
//   if (!todoInput === "") {
//     return 0;
//   } else {
//     if (!todoList) {
//       return 0;
//     }

//     todoList.innerHTML = "";
//     for (const todo of todoList) {
//       const itemList = document.createElement("li");
//       itemList.textContent = "123";

//       todoList.appendChild(itemList);
//     }
//   }
// };

// const initialTodoList = store.getState();
// renderTodoList(initialTodoList);
// console.log(initialTodoList);
