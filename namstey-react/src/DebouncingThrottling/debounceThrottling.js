import React, { useState, useEffect } from "react";

const DebounceThrottling = () => {

    const [inputValue, setInputValue] = useState("");
    const [debounceText, setDeboounceText] = useState("");
    const [debounceTimer, setDeboounceTimer] = useState();

    const handleChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleDebounceTextChange = () => {
        setDeboounceText(inputValue);
    }

    const handleMouseOver = () => {
        console.log("api ca;;");
    }

    const  debounce = (fn, delay) => {
        let timer;
        return function (...args) {
          clearTimeout(timer)
          timer = setTimeout(()=>fn(...args), delay)
        }
    }

    const  throttle = (fn, delay) => {
        let run= false;
        return function (...args) {
          if(!run){
            fn();
            run = true;
            setTimeout(()=>run = false, delay)
          }
        }
    }

        useEffect(() => {
        window.addEventListener('mousemove',throttle(handleMouseOver,1000))
    }, [])

    useEffect(() => {
        debounce(handleDebounceTextChange, 500)
    }, [inputValue])

    return (
        <>
            <input type="text" onChange={handleChange}></input>
            <div>Text :  {inputValue}</div>
            <div>Text : {debounceText}</div>
<br/>
            <span>THROTLLLING </span>
            

        </>
    )

}
export default DebounceThrottling