import React, {useState} from 'react';

const handleChange = () => {

};

const NewTodoBar: React.FC = () => {
  const [allTodoDone, setAllTodoDone] = useState(false);

  let fa: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
  if (!allTodoDone) {
    fa = <i className="fas fa-chevron-down cursor-pointer text-gray-400" onClick={() => setAllTodoDone(true)}/>;
  } else {
    fa = <i className="fas fa-chevron-down cursor-pointer text-black" onClick={() => setAllTodoDone(false)} />
  }

  return (
    <div className="flex items-center border-solid border border-gray-700 shadow-md">
      <div className="py-3 px-4 border-r border-black">
        {fa}
      </div>
      <input className="py-1 pl-3 outline-none w-full italic" type="text" name="name" value={""} onChange={handleChange} placeholder="Add a new Todo..."/>
    </div>
  );
};

export default NewTodoBar;
