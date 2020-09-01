import React, {useState, useContext} from 'react';
import {DoItContext} from "../context";

const NewTodoBar: React.FC = () => {
  const [newTodo, setNewTodo] = useState("");
  const [allTodoDone, setAllTodoDone] = useState(false);
  const {todosAll, addNewTodo, completeTodo}: any = useContext(DoItContext);

  const handleSubmitNewTodo = (event: any) => {
    event.preventDefault();
    addNewTodo(newTodo);
    setNewTodo("");
  };

  const completeAllTodos = () => {
    setAllTodoDone(true);
    todosAll.map((todo: any) => {
      return (
        completeTodo(todo.id, todo.task)
      )
    })
  };

  let inputClassName = "px-3 outline-none w-full ";
  if (newTodo === "") {
    inputClassName += "italic";
  }

  let fa: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
  if (!allTodoDone) {
    fa = <i className="fas fa-chevron-down cursor-pointer text-gray-400" onClick={completeAllTodos}/>;
  } else {
    fa = <i className="fas fa-chevron-down cursor-pointer text-black" onClick={() => setAllTodoDone(false)} />
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
