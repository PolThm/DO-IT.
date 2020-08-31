import React from 'react';
import Todo from "./Todo";

let todosData = [
  {
    task: "Write my first Todo"
  },
  {
    task: "Try the features"
  },
  {
    task: "Remove the completed Todos"
  },
];

let listOfTodos = todosData.map((todo) => {
  return (
    <Todo
      key={todo.task}
      task={todo.task}
    />
  )
});

const TodosList: React.FC = () => {
  return (
    <div className="">
      {listOfTodos}
    </div>
  );
};

export default TodosList;
