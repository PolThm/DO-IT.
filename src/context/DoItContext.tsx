import React, { createContext, PropsWithChildren, useContext, useState } from "react";

interface Todo {
  id: number;
  task: string;
  completed: boolean;
}

type Filter = "All" | "Active" | "Completed";

interface Context {
  todosAll: Todo[],
  activeTodos: Todo[],
  completedTodos: Todo[],
  filter: Filter;
  addNewTodo: (task: string) => void;
  completeTodo: (id: number, task: string) => void;
  activeTodo: (id: number, task: string) => void;
  removeTodo: (id: number) => void;
  editTodo: (id: number, task: string) => void;
  changeFilter: (filter: Filter) => void;
}

function willThrow() {
  throw new Error('Context is not initialized');
}

const initialTodos = [
  {id: 1, task: "Write my first Todo", completed: false},
  {id: 2, task: "Try the features", completed: false},
  {id: 3, task: "Remove the completed Todos", completed: false},
];

const defaultValue: Context = {
  todosAll: initialTodos,
  activeTodos: [],
  completedTodos: [],
  filter: "All",
  addNewTodo: willThrow,
  completeTodo: willThrow,
  activeTodo: willThrow,
  removeTodo: willThrow,
  editTodo: willThrow,
  changeFilter: willThrow
};

const Context = createContext(defaultValue);

export const useDoItContent = () => useContext(Context);

export const Provider = (props: PropsWithChildren<{}>) => {
  const { children } = props;

  // Use State to keep the values
  const [todosAll, setTodosAll] = useState(defaultValue.todosAll);
  const [filter, setFilter] = useState(defaultValue.filter)

  const activeTodos = todosAll.filter(todo => !todo.completed);
  const completedTodos = todosAll.filter(todo => todo.completed);

  const newTodosAll = (todo: Todo) => {
    setTodosAll((currentTodosAll) => {
      const todoIndex = currentTodosAll.findIndex(e => e.id === todo.id);
      if (todoIndex < 0) {
        throw new Error('Index not found');
      }
      const newTodosAll = [...currentTodosAll];
      newTodosAll[todoIndex] = todo;
      return newTodosAll;
    });
  }

  const addNewTodo: Context['addNewTodo'] = (task) => {
    const newTodo = {id: Date.now(), task, completed: false};
    setTodosAll([...todosAll, newTodo]);
  };

  const completeTodo: Context['completeTodo'] = (id, task) => {
    const completedTodo = {id, task, completed: true};
    newTodosAll(completedTodo)
  };

  const activeTodo: Context['activeTodo'] = (id, task) => {
    const activatedTodo = {id, task, completed: false};
    newTodosAll(activatedTodo)
  };

  const removeTodo: Context['removeTodo'] = (id) => {
    setTodosAll(currentTodos => currentTodos.filter(todo => todo.id !== id));
  };

  const editTodo: Context['editTodo'] = (id, task) => {
    setTodosAll((currentTodosAll) => {
      const editedTodoIndex = currentTodosAll.findIndex(todo => todo.id === id);
      const newTodosAll = [...currentTodosAll];
      newTodosAll[editedTodoIndex].task = task;
      return newTodosAll;
    })
  }

  const changeFilter: Context['changeFilter'] = (filter) => {
    setFilter(filter);
  };

  // Make the context object:
  const doItContext: Context = {
    todosAll,
    activeTodos,
    completedTodos,
    filter,
    addNewTodo,
    completeTodo,
    activeTodo,
    removeTodo,
    editTodo,
    changeFilter,
  };

  // pass the value in provider and return
  return <Context.Provider value={doItContext}>{children}</Context.Provider>;
};
