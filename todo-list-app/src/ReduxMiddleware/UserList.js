import React, { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import store from "./store";
import { fetchData } from "./actionCreator";

const UserList = () => {

    const state = useSelector((state)=>state);
    const dispatch = useDispatch();
      useEffect(()=>{
         dispatch(fetchData())
         console.log("state",state)
      },[])

      useEffect(()=>{
  
        console.log("state",state)
     },[state])

    return (<>
    {state.loading &&
    <div>LOADING</div>
    }

{state.error &&
    <div>SOMETHING WENT WRONG</div>
    }

{!state.loading && state.error.length===0 && state.data.length > 0 &&
state.data.map((item)=>{return(
<li>
  
        <span>
        {item.name} 
        </span>
        <span> - </span>
        <span>
        {item.company}
        </span>
   
</li>
)})

}

    </>)
}
export default UserList;