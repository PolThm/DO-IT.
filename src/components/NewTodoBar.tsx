import React from 'react';

const handleChange = () => {

};

const NewTodoBar: React.FC = () => {
  return (
    <div className="">
      <input className="border-solid border border-gray-700 rounded-lg px-3 py-1 outline-none w-full" type="text" name="name" value={""} onChange={handleChange} placeholder="Add a new Todo to the list..."/>
    </div>
  );
};

export default NewTodoBar;
