import React, { useState } from 'react';

const InputTodo = ({ onAdded }) => {
    const [description, setDescription] = useState("");

    const handleSubmitForm = async (e) => {
        e.preventDefault();
        if (!description.trim()) {
            alert("Please input a task");
            return;
        }

        try {
           const body = { description };
           const response = await fetch("/api/todos", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(body)
           });

            // refetches the list and rerender
            onAdded();
        } catch (err) {
            console.error(err.message);
        }
    };

  return (
    <div className='flex flex-col justify-center items-center py-[5rem] mt-5'>
        <h1 className='text-3xl mb-4'>My Todo List 📋</h1>
        <form onSubmit={handleSubmitForm} className='flex items-center gap-2 mt-10'>
            <input type="text" name="todo" value={description} className='w-full border px-2 py-1 rounded' onChange={e => {
                setDescription(e.target.value);
            }} />
            <button className='bg-green-500 text-white rounded px-4 py-1 transition hover:bg-green-400 duration-300'>Add</button>
        </form>
    </div>
  )
}

export default InputTodo