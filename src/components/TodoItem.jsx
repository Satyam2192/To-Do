import { useDispatch } from 'react-redux';
import {

  removeTodo,
  markCompleted,
  markIncomplete,
} from '../redux/actions';
import {  FaTrash, FaCheck, FaTimes } from 'react-icons/fa';
import { Button } from '@material-tailwind/react';

const TodoItem = ({ todo, index }) => {
  const dispatch = useDispatch();

  return (
    <li className="flex flex-col sm:flex-row sm:items-center justify-between border-b-2 py-2 gap-4">
      <div className="flex items-center">
        <span className="mr-4 text-[#05386B]">
          {index + 1}.
        </span>
        <span className={`mr-4 ${todo.completed ? 'line-through text-gray-700' : 'text-[#05386B]'}`}>
          {todo.text}
        </span>
      </div>
      <div className='space-x-3 ml-8'>
        
        <Button
          className=" text-lg  bg-red-500 text-white "
          onClick={() => dispatch(removeTodo(index))}
        >
          <FaTrash />
        </Button>
        {!todo.completed && (
          <Button
            className="text-lg bg-green-500 text-white "
            onClick={() => dispatch(markCompleted(index))}
          >
            <FaCheck />
          </Button>
        )}
        {todo.completed && (
          <Button
            className="text-lg bg-gray-500 text-white"
            onClick={() => dispatch(markIncomplete(index))}
          >
            <FaTimes />
          </Button>
        )}
      </div>
    </li>
  );
};

export default TodoItem;
