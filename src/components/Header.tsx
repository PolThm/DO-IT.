import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="">
      <h1 className="text-6xl pt-20 pb-4 text-center text-blue-500 uppercase tracking-wider font-bold">Do it.</h1>
      <h2 className="text-3xl text-center text-blue-300">Todo List <span className="text-gray-700">by Pol Thomas</span></h2>
    </header>
  );
};

export default Header;
