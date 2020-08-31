import React, { createContext, useState } from "react";
import PropTypes from "prop-types";

export const Context = createContext({});

export const Provider = (props: any) => {
  // Initial values are obtained from the props
  const {
    todosData: initialTodosData,
    children
  } = props;

  // Use State to keep the values
  const [todosData, setTodosData] = useState(initialTodosData);

  const addNewTodo = (task: string) => {
    const newTodo = { id: Date.now(), task: task };
    setTodosData(todosData.push(newTodo));
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

Provider.propTypes = {
  children: PropTypes.node,
  todosData: PropTypes.array,
};

Provider.defaultProps = {
  todosData: []
};
