import { createSlice ,nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos:[
        {id:1, text:"Hello world"}//state
    ]
}
//Action value 
// {type : "todo/addTodo(fuction)" , payload : hello world}

export const todoSlice = createSlice({
    name:"Todo",
    initialState,
    reducers :{
        addTodo : (state ,action) =>{
            const todo = {
                id:nanoid(),// this is used for  payload.id and the state.id
                text : action.payload,
            };
            state.todos.push(todo);

        },//also we get state and action it is syntax
        
        removeTodo : (state,action) =>{
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        
        upadateTodo : (state ,action) =>{
            state.todos = state.todos.map((todo) => 
            todo.id === action.payload.id 
            ? {...todo,text : action.payload.text,}
            :todo
            )
        },
        
        deleteTodo : (state,action) =>{
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        // here the state.todos is being deleted
        }
    }
})

export const {addTodo,upadateTodo,deleteTodo,removeTodo} = todoSlice.actions

export default todoSlice.reducer