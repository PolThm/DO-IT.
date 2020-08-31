import React, {useState} from 'react';

const TodosFooter: React.FC = () => {
  const [filter, setFilter] = useState("All");

  const baseButtonFilterClassName = "sm:mx-1 px-2 py-1 hidden sm:block cursor-pointer border rounded border-transparent hover:border-gray-300";
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
      <p className="pr-3">3 items left</p>
      <div className="flex">
        <div className={allButtonFilterClassName}>
          <a onClick={() => setFilter("All")}>All</a>
        </div>
        <div className={activeButtonFilterClassName}>
          <a onClick={() => setFilter("Active")}>Active</a>
        </div>
        <div className={completedButtonFilterClassName}>
          <a onClick={() => setFilter("Completed")}>Completed</a>
        </div>
      </div>
      <div className="hover:underline">
        <a className="cursor-pointer">Clear completed</a>
      </div>
    </div>
  );
};

export default TodosFooter;
