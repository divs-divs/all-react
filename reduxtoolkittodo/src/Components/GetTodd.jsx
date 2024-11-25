import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { removeTodo } from '../features/todos/todoSlice';

const GetTodd = ()=>{
    let selector = useSelector(state => state.todos);
    const dispatch = useDispatch();
    const handleDelete = (index)=>{
      dispatch(removeTodo(index))
    }

    return (
        <>
        {
            selector.map((item,index)=>{
                return(
                    <>
                    <li>{item.task}</li>
                    <button onClick={()=>handleDelete(index)}>Delete</button>
                    </>
                )
            })
        }
        </>
    )
}

export default GetTodd
