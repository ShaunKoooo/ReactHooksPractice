import { useEffect, memo, useState, useCallback } from "react";

const List = ({getItem}) => {
    const [item, setItem] = useState([]);
    useEffect(() => {
        console.log('render')
        setItem(getItem());
    }, [getItem]);
    return item?.map((data, index) => {
        return (
            <span key={data + index}>{data}</span>
        )
    });
}

// memo 會無效 因為 {} !== {} ， 要加上 useCallback
const ListMemo = memo(List);

const UseCallback = () => {
    const [number, setNumber] = useState(0);
    const [changeState, setState] = useState(false);
    const atNumChange = (e) => {
        setNumber(e.target.value);
    };

    const atChangeState = () => {
        setState(!changeState);
    };
    const callback = useCallback(() => {
        return [number + 1, number + 2, number + 3];
    }, [number]);

    return (
        <div>
            <input type='number' onChange={atNumChange} value={number} />
            <ListMemo getItem={callback} />
            <button onClick={atChangeState}>changeState: {changeState}</button>
        </div>
    );
}

export default UseCallback;