import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todos/todoSlice";

const AddTodo = () => {
    const dispatch = useDispatch();
    const [task, setTask] = useState("");
    const taskName = useRef();
    const handleAddTodo = (e) => {
        dispatch(addTodo(taskName.current.value));
        taskName.current.value = "";
    }
    return (
        <>
            <div>
                <input type="text" name="addTodo" id="addTodo" ref={taskName}></input>
                <button onClick={(e) => {
                    handleAddTodo(e)
                }}>Add  Todo</button>
            </div>
        </>
    )
}

export default AddTodo;