import React, {useContext} from 'react';
import Todo from "./Todo";

import {DoItContext} from "../context";

const TodosList: React.FC = () => {
  const doItContext = useContext(DoItContext);

  const {todosData}: any = doItContext;

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
