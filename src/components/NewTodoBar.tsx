import React, {useState, useContext} from 'react';
import {DoItContext} from "../context";

const NewTodoBar: React.FC = () => {
  const [newTodo, setNewTodo] = useState("");
  const [allTodosDone, setAllTodosDone] = useState(false);
  const {activeTodos, completedTodos, addNewTodo, completeTodo, activeTodo}: any = useContext(DoItContext);

  const handleSubmitNewTodo = (event: any) => {
    event.preventDefault();
    addNewTodo(newTodo);
    setNewTodo("");
  };

  const completeAllTodos = () => {
    if (!allTodosDone) {
      setAllTodosDone(true);
      activeTodos.map((todo: any) => {
        return (completeTodo(todo.id, todo.task))
      })
    } else {
      setAllTodosDone(false);
      completedTodos.map((todo: any) => {
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
    fa = <i className="fas fa-chevron-down cursor-pointer text-gray-400" onClick={completeAllTodos}/>;
  } else {
    fa = <i className="fas fa-chevron-down cursor-pointer text-black" onClick={() => setAllTodosDone(false)} />
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
