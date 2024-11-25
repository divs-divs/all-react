import React, { useCallback, useState } from "react";
const ExampleUseCallback = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("Namstey");
    const handleClick = useCallback((name) => {
        setName(name);
    }, [name, setName])
    

    return (
        <div>
            <div>Count : {count}</div>
            <button onClick={() => { setCount(count + 1) }}>Increment count</button>
            <div>Name : {name}</div>
            <ChildComponent handleClick={handleClick} />
        </div>
    )
}

const ChildComponent = React.memo((props) => {
    for (let i = 0; i < 1000; i++) {
        console.log(i);
    }
    return (
        <>
            <button onClick={() => { props.handleClick("Namstey jii") }}>Update Name</button>
        </>
    )
})

export default ExampleUseCallback;

