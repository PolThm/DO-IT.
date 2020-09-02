import React from 'react';
import { DoItContextProvider } from "../context";
import './App.css';
import Header from "./Header";
import TodosSection from "./TodosSection";

const App: React.FC = () => {

  return (
    <div className="container">
      <DoItContextProvider>
        <Header/>
        <TodosSection/>
      </DoItContextProvider>
    </div>
  );
};

export default App;
