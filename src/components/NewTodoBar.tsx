import React, { FormEventHandler, useState } from 'react';
import { useDoItContent } from "../context";

const NewTodoBar: React.FC = () => {
  const [newTodo, setNewTodo] = useState("");
  const {todosAll, addNewTodo, completeTodo, activeTodo} = useDoItContent();

  const allTodosDone = todosAll.every(todo => todo.completed);

  const handleSubmitNewTodo:FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    addNewTodo(newTodo);
    setNewTodo("");
  };

  const toggleAllTodos = () => {
    if (!allTodosDone) {
      todosAll.map((todo) => {
        return (completeTodo(todo.id, todo.task))
      })
    } else {
      todosAll.map((todo) => {
        return (activeTodo(todo.id, todo.task))
      })
    }
  };

  let inputClassName = "px-3 outline-none w-full ";
  if (newTodo === "") {
    inputClassName += "italic";
  }

  let fa: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
  if (!allTodosDone) {
    fa = <i className="fas fa-chevron-down cursor-pointer text-gray-400" onClick={toggleAllTodos}/>;
  } else {
    fa = <i className="fas fa-chevron-down cursor-pointer text-black" onClick={toggleAllTodos} />
  }

  return (
    <div className="flex items-center border-solid border border-gray-700 shadow-md">
      <div className="py-4 px-4 border-r border-black">
        {fa}
      </div>
      <form className="w-full" onSubmit={handleSubmitNewTodo}>
        <input className={inputClassName} type="text" name="newTodo" value={newTodo} onChange={(event) => setNewTodo(event.target.value)} placeholder="Add a new Todo..."/>
      </form>
    </div>
  );
};

export default NewTodoBar;
