import React from 'react';
import NewTodoBar from "./NewTodoBar";
import TodosList from "./TodosList";
import TodosFooter from "./TodosFooter";

const TodosSection: React.FC = () => {
  return (
    <div className="mb-16">
      <NewTodoBar/>
      <TodosList/>
      <TodosFooter/>
    </div>
  );
};

export default TodosSection;
