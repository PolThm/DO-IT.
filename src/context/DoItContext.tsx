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
  const [activeTodos, setActiveTodos] = useState(initialTodosAll);
  const [filter, setFilter] = useState("All");

  const addNewTodo = (task: string) => {
    const newTodo = {id: Date.now(), task: task, completed: false};
    setTodosAll([...todosAll, newTodo]);
  };

  const completeTodo = (id: number, task: string) => {
    const completedTodo = {id: id, task: task, completed: true};
    setActiveTodos<>(activeTodos.filter(todo => todo.id !== completedTodo.id));
    setCompletedTodos<>([...completedTodos, completedTodo]);
    setTodosAll<>([...todosAll.filter(todo => todo.id !== completedTodo.id), completedTodo]);
  };

  const activeTodo = (id: number, task: string) => {
    const activatedTodo = {id: id, task: task, completed: false};
    setTodosAll<>([activatedTodo, ...todosAll.filter(todo => todo.id !== activatedTodo.id)]);
    setActiveTodos<>([activatedTodo, ...activeTodos.filter(todo => todo.id !== activatedTodo.id)]);
    setCompletedTodos<>(completedTodos.filter(todo => todo.id !== activatedTodo.id));
  };

  const removeTodo = (id: number) => {
    setTodosAll<>(todosAll.filter(todo => todo.id !== id));
    setActiveTodos<>(activeTodos.filter(todo => todo.id !== id));
    setCompletedTodos<>(completedTodos.filter(todo => todo.id !== id));
  };

  // console.log(completedTodos);

  const changeFilter = (filter: string) => {
    setFilter(filter);
  };

  // Make the context object:
  const doItContext: any = {
    todosAll,
    activeTodos,
    completedTodos,
    filter,
    addNewTodo,
    completeTodo,
    activeTodo,
    removeTodo,
    changeFilter,
  };

  // pass the value in provider and return
  return <Context.Provider value={doItContext}>{children}</Context.Provider>;
};

export const {Consumer} = Context;
