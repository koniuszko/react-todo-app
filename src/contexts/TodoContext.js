import React from "react";
import { createTodoStore } from "../store/todoStore";
import { useLocalObservable } from "mobx-react-lite";

const TodoContext = React.createContext(null);

export const TodoProvider = ({ children }) => {
  const todoStore = useLocalObservable(createTodoStore);
  return (
    <TodoContext.Provider value={todoStore}>{children}</TodoContext.Provider>
  );
};

export const useTodoStore = () => React.useContext(TodoContext);
