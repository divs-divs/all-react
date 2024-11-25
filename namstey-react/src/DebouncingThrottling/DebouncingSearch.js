import React, { useEffect, useState } from "react";
const DebounceSearch = () => {

    const [userList, setUserList] = useState();
    const [originalUserList, setOriginalUserList] = useState();

    useEffect(() => {
        fetch("https://fake-json-api.mock.beeceptor.com/users")
            .then((res) => { return res.json() })
            .then((data) => {
                setUserList(data)
                setOriginalUserList(data)
            }
            )
    }, [])

    const handleUserSearch = (e) => {

        let userInput = e.target.value;
        if (userInput === "") {
            setUserList(originalUserList);

        }
        else {
            let temp = [];
            userList.map((item) => {
                let userInputInArray = item.name.split("");
                let typedString = userInputInArray.splice(0, userInput.length).join("");
                if (userInput === typedString) {
                    temp.push(item)
                }
            })
            setUserList(temp);
        }
    }

    const debounce = (func, delay) => {
        let timer;
        return function (...args) {
            clearTimeout(timer);
            timer = setTimeout(() => func(...args), delay)
        }
    }

    const throttle = (fn, delay) => {
        let run = false;
        return function () {
            if (!run) {
                run = true;
                fn();
                setTimeout(() => { run = false }, delay)
            }
        }
    }

    const handleThrottle = () => {
        console.log("Moving")
    }


    return (
        <>
            <input type="text" onChange={debounce(handleUserSearch, 1000)} />
            {userList && userList.map((item) => {
                return (
                    <li>{item.name}</li>
                )
            })}
            <br/>
            <div onMouseMove={throttle(handleThrottle, 1000)}>ROLL OVER  HERE</div>
        </>
    )

}
export default DebounceSearch;