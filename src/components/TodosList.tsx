import React, {useContext, useState} from 'react';
import Todo from "./Todo";

import {DoItContext} from "../context";

const TodosList: React.FC = (props: any) => {
  const doItContext = useContext(DoItContext);

  const {todosData}: any = doItContext;

  console.log(todosData);

  const listOfTodos = todosData.map((todo: any) => {
    return (
      <Todo
        key={todo.id}
        task={todo.task}
      />
    )
  });

  return (
    <div className="">
      {listOfTodos}
    </div>
  );
};

export default TodosList;
