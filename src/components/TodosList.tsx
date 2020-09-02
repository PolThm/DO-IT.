import React from 'react';
import { useDoItContent } from "../context";
import Todo from "./Todo";

const TodosList: React.FC = () => {
  const {todosAll, activeTodos, completedTodos, filter} = useDoItContent();

  let listOfTodos;

  if (filter === "All") {
    listOfTodos =
      todosAll.map((todo) => {
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
    listOfTodos =
      activeTodos.map((todo) => {
        return (
          <Todo
            key={todo.id}
            id={todo.id}
            task={todo.task}
            completed={todo.completed}
          />
        )
      });
  } else if (filter === "Completed") {
    listOfTodos =
      completedTodos.map((todo) => {
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
