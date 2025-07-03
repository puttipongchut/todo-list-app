import React from 'react'
import { useEffect, useState } from 'react';
import { FaTrash } from "react-icons/fa";

import EditTodo from './EditTodo';

const ListTodos = ({ setTodos, todos, getTodos }) => {

    const deleteTodo = async (id) => {
        try {
            const deleteTodo = await fetch(`/api/todos/${id}`, {
                method: "DELETE"
            });
            
            setTodos(todos.filter(todo => todo.todo_id !== id));
        } catch (err) {
            console.error(err.message);
        }
    };

    useEffect(() => {
        getTodos();
    }, []);

  return (
    <div className="max-w-4xl mx-auto mt-5 bg-white shadow-lg rounded-lg overflow-x-auto">
    <table className="min-w-full text-sm text-center text-gray-700">
      <thead className="bg-gray-200 text-gray-700 uppercase">
        <tr>
          <th className="px-4 py-3">Description</th>
          <th className="px-4 py-3">Edit</th>
          <th className="px-4 py-3">Delete</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-100">
        {/* <tr className="hover:bg-gray-50">
          <td className="px-4 py-3">John Doe</td>
          <td className="px-4 py-3">john@example.com</td>
          <td className="px-4 py-3">Admin</td>
        </tr> */}
        {todos.map(todo => (
            <tr key={todo.todo_id} className="hover:bg-gray-50">
                <td className="px-4 py-3">{todo.description}</td>
                <td className="px-4 py-3">
                    <div className='flex justify-center items-center'>
                        <EditTodo todo={todo} onUpdated={getTodos}/>
                    </div>
                </td>
                <td className="px-4 py-3">
                    <div className='flex justify-center items-center'>
                        <FaTrash onClick={() => deleteTodo(todo.todo_id)} className='text-xl text-red-700 hover:text-red-600 cursor-pointer transition duration-300'/>
                    </div>
                </td>
            </tr>
        ))}
      </tbody>
    </table>
  </div>
  )
}

export default ListTodos