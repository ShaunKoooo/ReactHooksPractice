import { useRef, useEffect, useState, memo } from "react";
// React.memo component 父類別 render 若與子類別無關則子類別不 render 
const RenderTip = ({count}) => {
    // useRef 當 this 用
    const renderCountRef = useRef(0);
    useEffect(() => {
        console.log(renderCountRef)
        renderCountRef.current += 1;
    });

    return (
        <div>
            <h1>props.count = {count}</h1>
            <h2>renderCount = {renderCountRef.current}</h2>
        </div>
    );
};

const RenderTip1 = memo(RenderTip);

// return true 包在 memo 裡永遠不會 render
function areEqual (prevProps, nextProps) {
    return true;
}
const RenderTip2 = memo(RenderTip, areEqual);


const ReactMemo = () => {
    const [count, setCount] = useState(0);
    const [show, setShow] = useState(false);
    const atClick = () => {
        setCount(count + 1);
    }
    const atShow = () => {
        setShow(!show);
    }
    return (
        <div>
            <RenderTip count={count} />
            <RenderTip1 count={count} />
            <RenderTip2 count={count} />
            <button onClick={atClick}>test</button>
            <button onClick={atShow}>show</button>
        </div>
    );
}

export default ReactMemo;