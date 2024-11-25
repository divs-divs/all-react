import React, { useEffect, useReducer, useState } from "react";
import reducer from "./Reducer";



const Counter = () => {

    let initialState = {
        count: 0
    }

    let [state, dispatch] = useReducer(reducer, initialState)

    const handleAction = (type) => {
        dispatch({ type: type })
    }
    return (
        <>
            <div>
                {state.count}
            </div>
            <button onClick={() => handleAction("Increment")}>Increment</button>
            <button onClick={() => handleAction("Decrement")}>Decrement</button>
            <button onClick={() => handleAction("Reset")}>Reset</button>
        </>
    );
};

export default Counter;