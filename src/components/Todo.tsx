import React, {FormEventHandler, useState} from 'react';
import { useDoItContent } from "../context";
import { Button, Dialog, DialogActions, DialogTitle, Input } from "@material-ui/core";

const Todo: React.FC<{id: number, task: string, completed: boolean}> = (props) => {
  const {completeTodo, activeTodo, removeTodo, editTodo} = useDoItContent();
  const [todoHover, setTodoHover] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [task, setTask] = useState(props.task);

  const submitEdit:FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    console.log(task)
    editTodo(props.id, task);
    setOpenModal(false)
  }

  let fa: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
  if (!props.completed) {
    fa = <i className="far fa-circle cursor-pointer text-gray-400" onClick={() => {completeTodo(props.id, props.task)}}/>;
  } else {
    fa = <i className="far fa-check-circle cursor-pointer text-black" onClick={() => {activeTodo(props.id, props.task)}}/>
  }

  let todoClassName = "px-3 cursor-pointer ";
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
        <p className={todoClassName} onClick={() => setOpenModal(true)}>{props.task}</p>
      </div>
      {todoCross}

      <Dialog open={openModal} onClose={() => setOpenModal(false)}>
        <DialogTitle className="mui-font">Edit my Todo</DialogTitle>
        <form onSubmit={submitEdit}>
          <Input className="mui-font italic px-6 text-red-400" value={task} onChange={(event) => setTask(event.target.value)}/>
        </form>
        <DialogActions>
          <Button className="mui-font" onClick={() => {editTodo(props.id, task); setOpenModal(false)}}>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Todo;
