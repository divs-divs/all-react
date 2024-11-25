import React, { useEffect }  from "react";

const Child = (props) => {
    useEffect(()=>{},[])
    return(
        <>
        Info from  parent :  {props.title}
        </>
    )
}

export default Child;