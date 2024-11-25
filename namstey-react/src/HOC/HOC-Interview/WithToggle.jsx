import React, {useState} from "react";

function withToggle (WrappedComponent)  {
    function  WithToggleComponent ()  {
      const[isToggle,setIsToggle] = useState(false);
      const handleToggle = () =>{
        setIsToggle(!isToggle);
      }
      return(
        <>
        <WrappedComponent isToggle={isToggle} handleToggle={handleToggle}/>
        </>
      )
    }
    return WithToggleComponent;
}

export  default  withToggle;