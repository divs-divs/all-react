import React, { useEffect, useState } from "react";
function HocThatAcceptComponent(WrappedComponent) {
    function A() {
    const [name, setName] = useState("Namastey");
    return (
        <>
            <WrappedComponent name={name} />
        </>
    )
    }
    return A;
}
export default HocThatAcceptComponent;