import React from 'react';
import { DoItContextProvider } from "../context";
import './App.css';
import Header from "./Header";
import TodosSection from "./TodosSection";

const App: React.FC = () => {
const todosAll = [
  {
    id: 1,
    task: "Write my first Todo"
  },
  {
    id: 2,
    task: "Try the features"
  },
  {
    id: 3,
    task: "Remove the completed Todos"
  },
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
