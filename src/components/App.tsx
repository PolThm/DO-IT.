import React from 'react';
import './App.css';
import Header from "./Header";
import NewComponent from "./NewComponent";

const App: React.FC = () => {
  return (
    <React.Fragment>
      <Header/>
      <NewComponent/>

      <div className="h-screen"/>
    </React.Fragment>
  );
};

export default App;
