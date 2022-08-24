import React, { useMemo, useState } from 'react';

// 大量計算、大量耗能的 method
const expensiveMethod = (value) => {
    let r = value;
    for (let i = 0; i < 1000000000; i++) {
        r += 1;
    }
    return r;
}


const UseMemo = () => {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);

    const atClick = () => {
        setCount(prev => prev + 1);
    }

    const atClick2 = () => {
        setCount2(prev => prev + 1);
    }

    // console.time();
    // const memorizedValue = expensiveMethod(count);
    // console.timeEnd();

    // 相依的 count 若沒有變動則去取原先存好的值
    // 其他區塊更新不會重算
    // 沒有相依陣列，每次都會執行
    // 相依參數為空陣列，只會執行一次
    console.time();
    const memorizedValue = useMemo(() => {
        const result = expensiveMethod(count);
        return result;
    }, [count]);
    console.timeEnd();

    return (
        <div>
            <h1>count: {count}</h1>
            <button onClick={atClick}>setCount</button>
            <h1>momorizedValue = {memorizedValue}</h1>
            <h1>count2: {count2}</h1>
            <button onClick={atClick2}>setCount2</button>
        </div>
    );
}

export default UseMemo;