import React, { useState } from 'react'
import { useToDo } from '../Context';
import './App.css';

function TodoItem({ todo }) {
    const [isTodoEditable,setIsTodoEditable] = useState(false);
    const [todoMsg ,setTodoMsg] = useState(todo.todo);
    const {updateTodo ,deleteTodo , toggleCompelete} = useToDo();

    const editTodo = () => {
        updateTodo(todo.id, { ...todo, todo: todoMsg });
        setIsTodoEditable(false);
    }
    
    const toggleCompleted = () =>{
        toggleCompelete(todo.id)
    }
    
    return (
        <div className={`flex border-2 w-10/12 max-w-3xl rounded-2xl px-6 py-4 gap-x-4 shadow-xl duration-300 text-black transform transition-all hover:scale-[1.02] hover:shadow-2xl ${
            todo.completed 
                ? "bg-gradient-to-r from-green-100 to-emerald-100 border-green-300 shadow-green-500/20" 
                : "bg-gradient-to-r from-white to-gray-50 border-gray-200 hover:border-blue-300 shadow-blue-500/10"
        }`}>
            {/* Custom Checkbox */}
            <label className="flex items-center cursor-pointer group">
                <input
                    type="checkbox"
                    className="sr-only"
                    checked={todo.completed}
                    onChange={toggleCompleted}
                />
                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-300 transform group-hover:scale-110 ${
                    todo.completed 
                        ? "bg-gradient-to-r from-green-500 to-emerald-500 border-green-500 shadow-lg shadow-green-500/30" 
                        : "border-gray-300 hover:border-blue-400 group-hover:shadow-md"
                }`}>
                    {todo.completed && (
                        <svg className="w-3 h-3 text-white animate-bounce" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                    )}
                </div>
            </label>

            <input
                type="text"
                className={`border-2 outline-none w-full bg-transparent rounded-xl px-4 py-2 text-lg font-medium transition-all duration-300 ${
                    isTodoEditable 
                        ? "border-blue-300 bg-blue-50 shadow-inner focus:border-blue-500 focus:ring-4 focus:ring-blue-200" 
                        : "border-transparent hover:border-gray-200"
                } ${todo.completed ? "line-through text-gray-500" : "text-gray-800"}`}
                value={todoMsg}
                onChange={(e) => setTodoMsg(e.target.value)}
                readOnly={!isTodoEditable}
            />

            {/* Edit/Save Button */}
            <button
                className={`inline-flex w-12 h-12 rounded-xl text-lg border-2 justify-center items-center font-bold shrink-0 transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-4 shadow-lg ${
                    todo.completed
                        ? "bg-gray-200 border-gray-300 cursor-not-allowed opacity-50"
                        : isTodoEditable
                            ? "bg-gradient-to-r from-blue-500 to-cyan-500 border-blue-400 text-white shadow-blue-500/30 hover:shadow-xl focus:ring-blue-300"
                            : "bg-gradient-to-r from-yellow-400 to-orange-500 border-yellow-300 text-white shadow-yellow-500/30 hover:shadow-xl focus:ring-yellow-300"
                }`}
                onClick={() => {
                    if (todo.completed) return;

                    if (isTodoEditable) {
                        editTodo();
                    } else setIsTodoEditable((prev) => !prev);
                }}
                disabled={todo.completed}
            >
                {isTodoEditable ? "💾" : "✏️"}
            </button>

            {/* Delete Button */}
            <button
                className="inline-flex w-12 h-12 rounded-xl text-lg border-2 border-red-300 justify-center items-center bg-gradient-to-r from-red-500 to-pink-500 text-white font-bold shrink-0 transition-all duration-300 transform hover:scale-110 shadow-lg shadow-red-500/30 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-red-300"
                onClick={() => deleteTodo(todo.id)}
            >
                🗑️
            </button>
        </div>
    );
}

export default TodoItem;
