import React, { useState } from 'react'
import { useToDo } from '../Context';
import './App.css';

function TodoForm() {
    const [todo , setTodo] = useState("");
    const {addTodo} = useToDo();
    
    const add = (e) =>{
        e.preventDefault()

        if(!todo) return;
        addTodo({todo : todo , completed : false});
        setTodo("");
    }
    
    return (
        <form onSubmit={add} className="flex justify-center gap-0 max-w-2xl mx-auto">
            <input
                type="text"
                placeholder="Write Todo... ✍️"
                className="w-9/12 border-2 border-white/20 rounded-l-2xl px-6 py-4 outline-none duration-300 bg-white/10 backdrop-blur-sm text-white placeholder-gray-300 text-lg font-medium shadow-lg focus:border-blue-400 focus:bg-white/20 focus:ring-4 focus:ring-blue-500/30 hover:bg-white/15 transition-all"
                value={todo}
                onChange={(e) =>setTodo(e.target.value)}
            />
            <button 
                type="submit" 
                className="rounded-r-2xl px-6 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold text-lg shrink-0 shadow-lg hover:shadow-xl hover:from-green-600 hover:to-emerald-700 transform transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-green-500/30 active:scale-95"
            >
                ➕ Add
            </button>
        </form>
    );
}

export default TodoForm;
