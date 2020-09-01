import React, {useContext} from 'react';
import {DoItContext} from "../context";
import Todo from "./Todo";

const TodosList: React.FC = () => {
  const doItContext = useContext(DoItContext);
  const {todosAll, completedTodos, filter}: any = doItContext;

  let listOfTodos;

  if (filter === "All") {
    listOfTodos =
      todosAll.map((todo: any) => {
        return (
          <Todo
            key={todo.id}
            id={todo.id}
            task={todo.task}
            completed={todo.completed}
          />
        )
      });
  } else if (filter === "Active") {

  } else if (filter === "Completed") {
    listOfTodos =
      completedTodos.map((todo: any) => {
        return (
          <Todo
            key={todo.id}
            id={todo.id}
            task={todo.task}
            completed={todo.completed}
          />
        )
      });
  }

  return (
    <div className="">
      {listOfTodos}
    </div>
  );
};

export default TodosList;
