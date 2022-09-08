import { useEffect } from 'react';
import {useState} from 'react';
import useInterval from './useInterval';

const Counter = () => {
    const [count, setCount] = useState(0);
    const [delay, setDelay] = useState(1000);
    const [run, setRun] = useState(true);

    
    useInterval(() => {
        setCount(count + 1);
        console.log('aaa')
    }, run ? delay : null);
    // 暫停
    /*/
    useEffect(() => {
        let id = setInterval(() => {
            setCount(count + 1);
        }, 1000);
        return () => { clearInterval(id) };
    });
    //*/

    const atOnChange = (e) => {
        setDelay(Number(e.target.value));
    };

    const atClickPause = () => {
        setRun(!run);
    };

    console.log(count)
    return (
        <div>
            <input value={delay} onChange={atOnChange}/>
            <div>{count}</div>
            <button onClick={atClickPause}>Pause</button>
        </div>
    );
};


export default Counter;

// https://overreacted.io/zh-hans/making-setinterval-declarative-with-react-hooks/