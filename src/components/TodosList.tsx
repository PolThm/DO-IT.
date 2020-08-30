import React from 'react';
import Todo from "./Todo";

const TodosList: React.FC = () => {
  return (
    <div className="">
      <Todo todo={"Write my first Todo"}/>
      <Todo todo={"Try the filters"}/>
      <Todo todo={"Remove the completed Todos"}/>
    </div>
  );
};

export default TodosList;
