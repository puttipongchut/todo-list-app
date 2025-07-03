import React from 'react'
import { useState } from 'react';
import { FaEdit } from 'react-icons/fa';

const EditTodo = ({ todo, onUpdated }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [description, setDescription] = useState(todo.description);

    const toggleModal = () => setIsOpen(!isOpen);

    const updateDescription = async (e) => {
        e.preventDefault();
        try {
            const body = { description };
            const response = await fetch(`/api/todos/${todo.todo_id}`, {
                method: "PUT",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            });

            // refetches the list and rerender
            onUpdated();
            toggleModal();
        } catch (err) {
            console.error(err.message);
        }
    };

  return (
    <>
        <FaEdit onClick={toggleModal} 
        className='text-xl hover:text-gray-500 cursor-pointer transition duration-300'
        />

    {isOpen && (
        <div className="fixed inset-0 bg-black/25 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm">
            <h2 className="text-lg font-semibold mb-4">Edit Something</h2>
            <input
              type="text"
              value={description}
              onChange={e => setDescription(e.target.value)}
              className="w-full p-2 border rounded mb-4"
            />
            <div className="flex justify-end gap-2">
              <button
                onClick={() => {
                  setDescription(todo.description);
                  toggleModal();
                }}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-200 transition duration-300"
              >
                Cancel
              </button>
              <button
                onClick={e => {
                  updateDescription(e); 
                  toggleModal();
                }}
                className="px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-600 transition duration-300"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default EditTodo