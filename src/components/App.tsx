import React from 'react';
import { DoItContextProvider } from "../context";
import './App.css';
import Header from "./Header";
import TodosSection from "./TodosSection";

const App: React.FC = () => {
const todosAll = [
  {id: 1, task: "Write my first Todo", completed: false},
  {id: 2, task: "Try the features", completed: false},
  {id: 3, task: "Remove the completed Todos", completed: false},
];

  return (
    <div className="container">
      <DoItContextProvider todosAll={todosAll}>
        <Header/>
        <TodosSection/>
      </DoItContextProvider>
    </div>
  );
};

export default App;
