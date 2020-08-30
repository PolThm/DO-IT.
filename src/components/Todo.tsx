import React, {useState} from 'react';

const Todo: React.FC = () => {
  const [todoDone, setTodoDone] = useState(false);

  let fa: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
  if (!todoDone) {
    fa = <i className="far fa-check-circle cursor-pointer text-gray-400" onClick={() => setTodoDone(true)}/>;
  } else {
    fa = <i className="fas fa-check-circle cursor-pointer text-black" onClick={() => setTodoDone(false)} />
  }

  return (
    <div className="p flex items-center border-solid border border-gray-700 border-t-0">
      <div className="py-3 px-4">
        {fa}
      </div>
      <p className="px-3">Write my first Todo</p>
    </div>
  );
};

export default Todo;
