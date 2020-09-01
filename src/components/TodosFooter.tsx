import React, {useContext, useState} from 'react';
import {DoItContext} from "../context";

const TodosFooter: React.FC = () => {
  const doItContext = useContext(DoItContext);
  const {todosAll}: any = doItContext;

  const [filter, setFilter] = useState("All");

  const baseButtonFilterClassName = "mx-1 px-2 py-1 hidden sm:block cursor-pointer border rounded border-transparent hover:border-gray-300 focus:outline-none";
  const selectedButtonFilterClassName = `${baseButtonFilterClassName} border-gray-700 hover:border-gray-700`;
  let allButtonFilterClassName = baseButtonFilterClassName;
  let activeButtonFilterClassName = baseButtonFilterClassName;
  let completedButtonFilterClassName = baseButtonFilterClassName;
  if (filter === "All") {
    allButtonFilterClassName = selectedButtonFilterClassName;
  } else if (filter === "Active") {
    activeButtonFilterClassName = selectedButtonFilterClassName;
  } else if (filter ==="Completed") {
    completedButtonFilterClassName = selectedButtonFilterClassName;
  }

  return (
    <div className="py-2 px-4 flex items-center justify-between w-full border-solid border border-gray-700 border-t-0 text-sm">
      <p className="pr-3">{todosAll.length} items left</p>
      <div className="flex">
        <button className={allButtonFilterClassName} onClick={() => setFilter("All")}>All</button>
        <button className={activeButtonFilterClassName} onClick={() => setFilter("Active")}>Active</button>
        <button className={completedButtonFilterClassName} onClick={() => setFilter("Completed")}>Completed</button>
      </div>
      <button className="cursor-pointer focus:outline-none hover:underline">Clear completed</button>
    </div>
  );
};

export default TodosFooter;
