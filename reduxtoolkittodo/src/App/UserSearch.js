
import React, { useState, useEffect } from "react";

const UserSearch = () => {
    const [userDetail, setUserDetail] = useState([]);
    useEffect(() => {
        fetch("https://fake-json-api.mock.beeceptor.com/users")
            .then((res) => { return res.json() })
            .then((data) => setUserDetail(data))
    }, [])

    const handleUserList = (e) => {

        let userName = e.target.value;
        let filterUsers = userDetail;
        let filterArray = [];

        setTimeout(() => {
            filterUsers.map((item) => {
                if (item.name.includes(userName)) {
                    filterArray.push(item);
                }
            })
            setUserDetail(filterArray);

        }, 2000)
    }

    return (
        <>
            <input type="text" onChange={(e) => handleUserList(e)} />
            User List
            {userDetail.length > 0 &&


                userDetail.map((item) => {
                    return (
                        <li>{item.name}</li>
                    )
                })

            }
        </>
    )

}
export default UserSearch;