import React, { useEffect, useState } from "react";
import {connect} from "react-redux";


const Todo = ({addTodo,todos,removeTodo,updateTodo}) =>{

  const [newTodo, setNewTodo] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodo);
    setNewTodo('');
  };

  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={newTodo} onChange={(event) => setNewTodo(event.target.value)} />
        <button type="submit">Add Todo</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => updateTodo(todo.id)}
            />
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
              {todo.text}
            </span>
            <button onClick={() => removeTodo(todo.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStoreToProp = (state) =>{
  return {todos : state.todos}
}
const mapStoreToDispatch = (dispatch)=> {
 return {  addTodo  : (todo) =>  dispatch({type : "ADD_ITEM",todo}),
removeTodo : (todo)=>dispatch({type:"REMOVE_ITEM",id:todo.id}),
updateTodo : ((todo)=>dispatch({type:"UPDATE_TODO_LIST",id:todo.id}))
}
}
export default  connect(mapStoreToProp, mapStoreToDispatch)(Todo);