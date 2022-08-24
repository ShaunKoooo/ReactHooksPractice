// useMemo 避免 {} !== {}
import { useEffect, useMemo, useState } from "react";


const UseMemo1 = () => {
    const [number, setNumber] = useState(0);
    const [dark, setDark] = useState(false);

    // 更新其他 state 時也會跑 useEffect 
    // const styleTheme = {
    //     background: dark ? 'red': 'yellow',
    //     fontSize: dark ? 'red' : 'yellow',
    // }

    const styleTheme = useMemo(() => {
        return {
            background: dark ? 'red': 'yellow',
            fontSize: dark ? 'red' : 'yellow',
        }
    }, [dark]);

    // changeTheme 有變時印 console
    useEffect(() => {
        console.log('changeTheme', styleTheme);
    }, [styleTheme]);

    const atChangeInput = (e) => {
        setNumber(e.target.value);
    }

    const atChangeTheme = () => {
        setDark(!dark);
    }

 
    return (
        <div>
            <input type="number" onChange={atChangeInput} value={number}></input>
            <button onClick={atChangeTheme}>changeTheme</button>
        </div>
    );
}

export default UseMemo1;