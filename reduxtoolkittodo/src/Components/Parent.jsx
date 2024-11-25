import React, { useEffect, useState }  from "react";
import Child from "./Child";

const Parent = () => {
    const[title,setTite] = useState("IInterview");
    useEffect(()=>{ return(()=>{})},[])
    return(
        <>
        Child Component : 
        <Child title={title}></Child>
        </>
    )
}

export  default Parent;