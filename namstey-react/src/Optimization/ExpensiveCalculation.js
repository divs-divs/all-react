
import React, { useMemo, useState } from "react";

const ExpensiveCalculation = () => {
    const [count, setCount] = useState(0);
    const [dependentCount, setDependentCount] = useState(0);

    function expensiveFunction() {
        let result = 0;
        for (let i = 0; i <= 10000; i++) {
            result = result + 1;
        }
        console.log("valuue", result);
        return result;
    }

    let value = useMemo(expensiveFunction, [dependentCount]);
    const handleCount = () => {
        setCount(count + 1);
    }
    const handleDependentCount = () => {
        setDependentCount(dependentCount + 1);
    }
    return (
        <div>
            <button onClick={() => handleCount()}>Incrememnt Count</button>
            <div>{count}</div>
            <button onClick={() => handleDependentCount()}>Dependent Count</button>
            <div>{dependentCount}</div>
        </div>
    )
}

export default ExpensiveCalculation;