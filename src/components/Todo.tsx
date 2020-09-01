import React, {useContext, useState} from 'react';
import {DoItContext} from "../context";


const Todo: React.FC<{id: number, task: string, completed: boolean}> = (props) => {
  const [todoHover, setTodoHover] = useState(false);
  const {completeTodo, activeTodo, removeTodo}: any = useContext(DoItContext);

  let fa: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
  if (!props.completed) {
    fa = <i className="far fa-circle cursor-pointer text-gray-400" onClick={() => {completeTodo(props.id, props.task, props.completed);}}/>;
  } else {
    fa = <i className="far fa-check-circle cursor-pointer text-black" onClick={() => {activeTodo(props.id, props.task, props.completed);}}/>
  }

  let todoClassName: string = "px-3 ";
  if (props.completed) {
    todoClassName += 'line-through text-gray-400'
  }

  let todoCross: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> | undefined;
  if (todoHover) {
    todoCross = <i className="fas fa-times text-red-400 mr-4 cursor-pointer" onClick={() => removeTodo(props.id)}/>
  }

  return (
    <div className="flex items-center justify-between w-full border-solid border border-gray-700 border-t-0" onMouseEnter={() => setTodoHover(true)} onMouseLeave={() => setTodoHover(false)}>
      <div className="flex items-center">
        <div className="py-4 px-4">
          {fa}
        </div>
        <p className={todoClassName}>{props.task}</p>
      </div>
      {todoCross}
    </div>
  );
};

export default Todo;
