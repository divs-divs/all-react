import { createSlice,nanoid } from "@reduxjs/toolkit";

let inititalState = {
    todos : [{"id":1,"task": " React"}]
}

export const todoSlice = createSlice({
    name:'todo',
    initialState: inititalState,
    reducers:{
        addTodo : (state,action) =>{
            state.todos.push({
                id:nanoid(),
                task:action.payload
            })

        },
        removeTodo : (state,action)=>{
            state.todos = state.todos.filter((todo)=>todo.id !== action.payload)
        }
    }
})

export const {addTodo,updateTodo,removeTodo} = todoSlice.actions;
export  default todoSlice.reducer;