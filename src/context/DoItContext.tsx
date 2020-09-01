import React, {createContext, PropsWithChildren, useState} from "react";
// import _ from 'lodash';

export const Context = createContext({});

export const Provider = (props: PropsWithChildren< any >) => {
  // Initial values are obtained from the props
  const {
    todosAll: initialTodosAll,
    children
  } = props;

  // Use State to keep the values
  const [todosAll, setTodosAll] = useState(initialTodosAll);
  const [completedTodos, setCompletedTodos] = useState([]);
  const [filter, setFilter] = useState("All");

  const addNewTodo = (task: string) => {
    const newTodo = {id: Date.now(), task: task, completed: false};
    setTodosAll([...todosAll, newTodo]);
  };

  const completeTodo = (id: number, task: string) => {
    const completedTodo = {id: id, task: task};
    setCompletedTodos<>([...completedTodos, completedTodo]);
  };

  const activeTodo = (id: number, task: string) => {
    const completedTodo = {id: id, task: task};
    setCompletedTodos<>(completedTodos.filter(todo => todo !== completedTodo));
    // setCompletedTodos<>(_.omit(completedTodos, completedTodo));
  };

  console.log(completedTodos);

  const changeFilter = (filter: string) => {
    setFilter(filter);
  };

  // Make the context object:
  const doItContext: any = {
    todosAll,
    setTodosAll,
    completedTodos,
    setCompletedTodos,
    filter,
    setFilter,
    addNewTodo,
    completeTodo,
    changeFilter,
    activeTodo
  };

  // pass the value in provider and return
  return <Context.Provider value={doItContext}>{children}</Context.Provider>;
};

export const {Consumer} = Context;
