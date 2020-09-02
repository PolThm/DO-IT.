import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="mb-16">
      <h1 className="title text-6xl pt-16 pb-4 text-center text-blue-600 uppercase tracking-wider font-bold">Do it.</h1>
      <h2 className="text-3xl text-center text-blue-300">Todo List <span className="text-gray-700">by Pol Thomas</span></h2>
    </header>
  );
};

export default Header;
