import React, { useEffect, useState } from "react";
const App = () =>{

  const[userTodos,setUserTodos] = useState();
  const[isNewTaskOpen,setIsNewTaskOpen] = useState(false);
  const[userInput,setUserInput] = useState();

  useEffect(()=>{
    fetch("https://dummyjson.com/todo")
    .then((res)=>{return res.json()})
    .then((data)=>setUserTodos(data.todos));
  },[])

  const hhandleUserInput = (e) =>{
    setUserInput(e.target.value);
  }

  const hhandleUserInputTaskOpen = () =>{
    setIsNewTaskOpen(true);
  }


  const handleAdd = () =>{
    let obj = {
      id : userTodos.length+1,
      userId : Math.random(),
      todo:userInput,
      completed:false

    }
    let temp = userTodos;
    temp.push(obj);
    setIsNewTaskOpen(false);
    setUserTodos(temp);
  }

  const handleDelete = (id) =>{
    let temp = userTodos;
    temp = temp.filter((item)=>item.id!==id)
    setUserTodos(temp);
  }

  const handleChheck = (id,check) =>{
    let temp = userTodos;
    let temp1 = [];
    temp = temp.map((item)=>{
      if(item.id === id){
        let obj = {
          id : item.id,
          userId : item.userId,
          todo:item.todo,
          completed:check
    
        }
        temp1.push(obj);
      }
      else{
        temp1.push(item);
      }
    })

    setUserTodos(temp1);

  }


  return(

    <>
    <button onClick={hhandleUserInputTaskOpen}>ADD NEW ITEM</button>
    {
      isNewTaskOpen &&
       <div>
        <input type="text" onChange={(e)=>{hhandleUserInput(e)}}/>
        <button onClick={handleAdd}>ADD </button>
       </div>
    }
    {
      userTodos && 
      userTodos.map((item)=>{
        return(
          <li>
            <span className={item.completed ? "strike-out":"strike-in"} >{item.todo}</span>
            <input type="checkbox" checked={item.completed} onChange={()=>handleChheck(item.id,!item.completed)}/>
            <button onClick={()=>{handleDelete(item.id)}}>DELETE </button>
          </li>
        )
      })
    }
    </>
  )
}
export default  App;