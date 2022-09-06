import { useState, useEffect, useRef } from "react";

const UpdateDocTitle = () => {
    const [count, setCount] = useState(0);
    const isUnmount = useRef(false);
    const atClick = () => {
        isUnmount && setCount(count + 1);
    }

    useEffect(() => {
        isUnmount.current = true;
        // 更新文件標題
        document.title = `You clicked ${count} times`;
        return () => {
            isUnmount.current = false;
        }
    });

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={atClick}>click</button>
        </div>
    );
}

export default UpdateDocTitle;