
import React,{useState} from 'react';

 const Child = (props) => {


  return (
    <div className='App'>
      <button onClick={()=>props.handleIncrement()}>Increment</button>
      <button onClick={()=>props.handleDecrement()}>Decrement</button>
    </div>
  );
}

export default Child;