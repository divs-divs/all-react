import React, { useEffect, useState } from "react";
const Timer = () => {

  const[counter,setCounter] = useState(0);
  const[intervalId,setIntervalId] = useState(0);

  const handleStart = () => {
   let intervalId =  setInterval(()=>{
      setCounter((counter)=>counter+1)
    },1000)
    setIntervalId(intervalId);
  }

  const handleStop = () => {
    clearInterval(intervalId);
   }


  return (
    <div className="App">
      <div>{counter}</div>
      <button onClick={()=>handleStart()}>START</button>
      <button onClick={()=>handleStart()}>RESUME</button>
      <button onClick={()=>handleStop()}>STOP</button>
    </div>

  );
}
export default Timer;