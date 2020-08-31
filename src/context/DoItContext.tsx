import React, {createContext, PropsWithChildren, useState} from "react";

export const Context = createContext({});

export const Provider = (props: PropsWithChildren< any >) => {
  // Initial values are obtained from the props
  const {
    todosData: initialTodosData,
    children
  } = props;

  // Use State to keep the values
  const [todosData, setTodosData] = useState(initialTodosData);

  const addNewTodo = (task: string) => {
    const newTodo = { id: Date.now(), task: task };
    setTodosData([...todosData, newTodo]);
  };

  // Make the context object:
  const doItContext: any = {
    todosData,
    setTodosData,
    addNewTodo
  };

  // pass the value in provider and return
  return <Context.Provider value={doItContext}>{children}</Context.Provider>;
};

export const { Consumer } = Context;
