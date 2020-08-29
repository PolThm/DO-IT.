import React from 'react';
import './App.css';
import Header from "./Header";
import TodosSection from "./TodosSection";

const App: React.FC = () => {
  return (
    <div className="container">
      <Header/>
      <TodosSection/>

      <div className="h-screen"/>
    </div>
  );
};

export default App;
