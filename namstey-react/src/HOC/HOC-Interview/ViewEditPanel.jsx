import React , {useState} from 'react';
import withToggle from './WithToggle';

function ViewEditPanel(props) {
    const[defaultText,setDefaultText]= useState("default text");
    return (
        <>
        {!props.isToggle && <p>{defaultText}</p>}
        {props.isToggle && <input  onChange={(e)=>setDefaultText(e.target.value)}></input>}
        <button onClick={()=>props.handleToggle()}>{!props.isToggle ? "View" :"Edit"}</button>
        </>
    )
}

export default withToggle(ViewEditPanel);
