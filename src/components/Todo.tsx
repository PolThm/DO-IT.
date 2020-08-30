import React, {useState} from 'react';

const Todo: React.FC = () => {
  const [todoDone, setTodoDone] = useState(false);
  const [todoHover, setTodoHover] = useState(false);

  let fa: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
  if (!todoDone) {
    fa = <i className="far fa-circle cursor-pointer text-gray-400" onClick={() => setTodoDone(true)}/>;
  } else {
    fa = <i className="fas fa-check-circle cursor-pointer text-black" onClick={() => setTodoDone(false)} />
  }

  let todoClassName: string = "px-3 ";
  if (todoDone) {
    todoClassName += 'line-through text-gray-400'
  }

  let todoCross: any = null;
  if (todoHover) {
    todoCross = <i className="fas fa-times text-red-400 mx-4 cursor-pointer"/>
  }

  return (
    <div className="flex items-center justify-between w-full border-solid border border-gray-700 border-t-0" onMouseEnter={() => setTodoHover(true)} onMouseLeave={() => setTodoHover(false)}>
      <div className="flex items-center">
        <div className="py-3 px-4">
          {fa}
        </div>
        <p className={todoClassName}>Write my first Todo</p>
      </div>
      {todoCross}
    </div>
  );
};

export default Todo;
