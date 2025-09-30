import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../Feature/Todo/TodoSlice";
import "./Todo.css";

function Todo() {
  // State to keep track of which todo is being edited (by id)
  const [editableTodoId, setEditableTodoId] = React.useState(null);
  // State for the editable input's value
  const [editableText, setEditableText] = React.useState("");

  // Get the current todos array from Redux store
  const todos = useSelector((state) => state.todos);

  // Get the dispatch function for dispatching actions
  const dispatch = useDispatch();

  // Function to save the updated todo text to Redux store
  const editTodo = (id) => {
    // Calls updateTodo action with todo id and new text
    dispatch(updateTodo({ id, text: editableText }));
    // Reset editing state
    setEditableTodoId(null);
    setEditableText("");
  };

  return (
    <>
      {/* Title for todo section */}
    <div>Todos</div>
      {/* Create an unordered list for all todos */}
    <ul className="list-none">
        {/* Iterate over todos and render each as a list item */}
        {todos.map((todo) => (
        <li
            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
            // Use todo id as key for React rendering
            key={todo.id}
            >
            {/* Show input field only if this todo is being edited */}
            {editableTodoId === todo.id ? (
                <input
                type="text"
                // Controlled input value from state
                value={editableText}
                // Update editableText on every keystroke
                onChange={(e) => setEditableText(e.target.value)}
                className="text-amber-700"
                />
            ) : (
              // Show todo text, styled if completed
                <span
                className={`text-lg ${
                    todo.completed ? "line-through text-gray-400" : ""
                }`}
                >
                {todo.text}
                </span>
            )}

            {/* Edit or save button for each todo */}
            <button
                className={`inline-flex w-12 h-12 rounded-xl text-lg border-2 justify-center items-center font-bold shrink-0 transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-4 shadow-lg ${
                // Style changes if todo completed or in edit mode
                todo.completed
                    ? "bg-gray-200 border-gray-300 cursor-not-allowed opacity-50"
                    : editableTodoId === todo.id
                    ? "bg-gradient-to-r from-blue-500 to-cyan-500 border-blue-400 text-white shadow-blue-500/30 hover:shadow-xl focus:ring-blue-300"
                    : "bg-gradient-to-r from-yellow-400 to-orange-500 border-yellow-300 text-white shadow-yellow-500/30 hover:shadow-xl focus:ring-yellow-300"
                }`}
              // Button click handles entering or saving edit
                onClick={() => {
                // Disable if todo is completed
                if (todo.completed) return;
                // If currently editing, save changes
                if (editableTodoId === todo.id) {
                    editTodo(todo.id);
                } else {
                  // Otherwise, enter edit mode and preload text
                    setEditableTodoId(todo.id);
                    setEditableText(todo.text);
                }
                }}
              // Button is disabled if completed
                disabled={todo.completed}
            >
              {/* Show save or edit icon based on edit state */}
                {editableTodoId === todo.id ? "💾" : "✏️"}
            </button>

            {/* Delete button to remove todo */}
            <button
              // Dispatch Redux action to delete the todo by id
                onClick={() => dispatch(deleteTodo(todo.id))}
                className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
            >
              {/* Trash icon SVG for delete */}
                <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
                >
                <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21..."
                />
                </svg>
            </button>
            </li>
        ))}
        </ul>
    </>
    );
}

export default Todo; 