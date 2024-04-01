import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TodoList from './TodoList';
import { addTodo } from '../redux/actions';
import { Button, Input } from '@material-tailwind/react';

const Todo = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [newTodoText, setNewTodoText] = useState('');

  const handleAddTodo = (text) => {
    dispatch(addTodo(text));
  };

  const handleAddTodoClick = () => {
    if (newTodoText.trim() !== '') {
      handleAddTodo(newTodoText.trim());
      setNewTodoText('');
    }
  };


  return (
    <div className="max-w-7xl min-h-[100vh] mx-auto p-4 rounded">
      <h2 className='mt-3 mb-6 text-2xl font-bold text-center uppercase text-[#05386B]'>TODO APP</h2>
      <div className="flex items-center mb-4">
        <input
          className='w-full p-2 rounded-lg bg-[#EDF5E1] text-[#05386B] focus:float-none'
          id="addTodoInput"
          type="text"
          placeholder="Add Todo"
          value={newTodoText}
          onChange={(e) => setNewTodoText(e.target.value)}
        />
        <Button
          className="ml-4 w-32 bg-[#05386B]"
          onClick={handleAddTodoClick}
        >
          <p>ADD</p>
        </Button>
      </div>


      <TodoList />
    </div>
  );
};

export default Todo;
