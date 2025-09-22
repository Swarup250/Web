import React, { useEffect, useState } from "react";
import { ToDoProvider } from "../Context/index";
import TodoForm from "./ToDoForm";
import TodoItem from "./ToDoItem";
import './App.css';

function ToDoList() {
    const [todos, setTodos] = useState([])
    
    const addTodo = (todo) => {
        setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev])
    }

    const updateTodo = (id, todo) => {
        setTodos((prev) => prev.map((prevTodo) => (prevTodo.id) === id ? todo : prevTodo))
    }

    const deleteTodo = (id) => {
        setTodos((prev) => prev.filter((todo) => todo.id !== id))
    }

    const toggleComplete = (id) => {
        setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id ? { ...prevTodo, completed: !prevTodo.completed } : prevTodo))
    }

    useEffect(() => {
        const todos = JSON.parse(localStorage.getItem("todos"));
        if (todos && todos.length > 0) {
            setTodos(todos)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos])
    
    return (
        <ToDoProvider value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}>
            <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 py-8 px-4">
                <div className="max-w-4xl mx-auto">
                    {/* Header Section */}
                    <div className="text-center mb-12">
                        <h1 className="text-5xl font-bold text-white mb-4 tracking-tight">
                            ✨ Task Manager
                        </h1>
                        <p className="text-gray-300 text-lg">
                            Organize your day, accomplish your goals
                        </p>
                    </div>

                    {/* Main Container */}
                    <div className="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 p-8">
                        {/* Add Todo Form */}
                        <div className="mb-8">
                            <TodoForm />
                        </div>

                        {/* Stats Section */}
                        <div className="flex justify-between items-center mb-6 text-white">
                            <div className="text-sm bg-white/20 px-4 py-2 rounded-full">
                                Total: {todos.length}
                            </div>
                            <div className="text-sm bg-green-500/20 px-4 py-2 rounded-full">
                                Completed: {todos.filter(todo => todo.completed).length}
                            </div>
                            <div className="text-sm bg-orange-500/20 px-4 py-2 rounded-full">
                                Pending: {todos.filter(todo => !todo.completed).length}
                            </div>
                        </div>

                        {/* Todo Items */}
                        <div className="space-y-4">
                            {todos.length === 0 ? (
                                <div className="text-center py-16">
                                    <div className="text-6xl mb-4">📝</div>
                                    <p className="text-gray-400 text-lg">
                                        No tasks yet. Add one above to get started!
                                    </p>
                                </div>
                            ) : (
                                todos.map((todo) => (
                                    <div key={todo.id} className="transform transition-all duration-200 hover:scale-[1.02]">
                                        <TodoItem todo={todo} />
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </ToDoProvider>
    );
}

export default ToDoList;
