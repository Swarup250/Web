import React, { useState } from 'react'
import { useToDo } from '../Context';
import './App.css';

function TodoItem({ todo }) {
    const [isTodoEditable, setIsTodoEditable] = useState(false);
    const [todoMsg, setTodoMsg] = useState(todo.todo);
    const { updateTodo, deleteTodo, toggleComplete } = useToDo();

    const editTodo = () => {
        if (todoMsg.trim()) {
            updateTodo(todo.id, { ...todo, todo: todoMsg.trim() });
            setIsTodoEditable(false);
        } else {
            setTodoMsg(todo.todo); // Reset if empty
            setIsTodoEditable(false);
        }
    }

    const toggleCompleted = () => {
        toggleComplete(todo.id)
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            editTodo();
        }
        if (e.key === 'Escape') {
            setTodoMsg(todo.todo);
            setIsTodoEditable(false);
        }
    }
    
    return (
        <div className={`group relative overflow-hidden rounded-2xl transition-all duration-300 transform hover:scale-[1.01] ${
            todo.completed 
                ? "bg-gradient-to-r from-green-500/20 to-emerald-500/20 border-2 border-green-400/30" 
                : "bg-gradient-to-r from-white/90 to-gray-50/90 border-2 border-gray-200/50 hover:border-purple-300/50"
        }`}>
            {/* Animated background gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 to-pink-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <div className="relative flex items-center gap-4 p-6">
                {/* Custom Checkbox */}
                <label className="flex items-center cursor-pointer group-checkbox">
                    <input
                        type="checkbox"
                        className="sr-only"
                        checked={todo.completed}
                        onChange={toggleCompleted}
                    />
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                        todo.completed 
                            ? "bg-gradient-to-r from-green-500 to-emerald-500 border-green-500 shadow-lg shadow-green-500/30" 
                            : "border-gray-300 hover:border-purple-400 group-hover:shadow-md"
                    }`}>
                        {todo.completed && (
                            <svg className="w-3 h-3 text-white animate-bounce" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                        )}
                    </div>
                </label>

                {/* Todo Text Input */}
                <div className="flex-1 min-w-0">
                    <input
                        type="text"
                        className={`w-full bg-transparent text-lg font-medium border-0 outline-none transition-all duration-300 ${
                            isTodoEditable 
                                ? "text-gray-800 bg-white/50 rounded-lg px-3 py-2 border-2 border-purple-300 shadow-inner" 
                                : "text-transparent"
                        } ${todo.completed ? "line-through text-gray-500" : "text-gray-800"}`}
                        value={todoMsg}
                        onChange={(e) => setTodoMsg(e.target.value)}
                        onKeyDown={handleKeyPress}
                        readOnly={!isTodoEditable}
                        onBlur={editTodo}
                    />
                    
                    {/* Display Text */}
                    {!isTodoEditable && (
                        <div className={`text-lg font-medium transition-all duration-300 ${
                            todo.completed 
                                ? "line-through text-gray-500" 
                                : "text-gray-800 group-hover:text-purple-700"
                        }`}>
                            {todo.todo}
                        </div>
                    )}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
                    {/* Edit/Save Button */}
                    <button
                        className={`p-3 rounded-xl transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-4 ${
                            todo.completed
                                ? "bg-gray-300 cursor-not-allowed opacity-50"
                                : isTodoEditable
                                    ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-500/30 hover:shadow-xl"
                                    : "bg-gradient-to-r from-yellow-400 to-orange-500 text-white shadow-lg shadow-yellow-500/30 hover:shadow-xl"
                        } focus:ring-purple-500/30`}
                        onClick={() => {
                            if (todo.completed) return;
                            if (isTodoEditable) {
                                editTodo();
                            } else {
                                setIsTodoEditable(true);
                            }
                        }}
                        disabled={todo.completed}
                        title={todo.completed ? "Cannot edit completed task" : isTodoEditable ? "Save changes" : "Edit task"}
                    >
                        {isTodoEditable ? "💾" : "✏️"}
                    </button>

                    {/* Delete Button */}
                    <button
                        className="p-3 rounded-xl bg-gradient-to-r from-red-500 to-pink-500 text-white shadow-lg shadow-red-500/30 
                                hover:shadow-xl transition-all duration-300 transform hover:scale-110 
                                focus:outline-none focus:ring-4 focus:ring-red-500/30"
                        onClick={() => deleteTodo(todo.id)}
                        title="Delete task"
                    >
                        🗑️
                    </button>
                </div>
            </div>

            {/* Completion celebration effect */}
            {todo.completed && (
                <div className="absolute top-2 right-2 animate-bounce">
                    🎉
                </div>
            )}
        </div>
    );
}

export default TodoItem;
