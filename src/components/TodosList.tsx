import React, {useState} from 'react';
import Todo from "./Todo";

const TodosList: React.FC = () => {
  const [todosData, setTodosData] = useState([
    {
      task: "Write my first Todo"
    },
    {
      task: "Try the features"
    },
    {
      task: "Remove the completed Todos"
    },
  ]);

  let listOfTodos = todosData.map((todo) => {
    return (
      <Todo
        key={`${todo.task} ${Date.now()}`}
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
