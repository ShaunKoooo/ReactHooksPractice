import { useReducer } from "react";
import counterReducer from "./counterReducer";

const Counter = () => {
    const initialState = { count: 0 };
    // action, initialState
    const [state, dispatch] = useReducer(counterReducer, initialState);
    const atChangeNumber = (e) => {
        console.log(typeof e.target.innerText)
        dispatch({type: e.target.innerText});
    };
    return (
        <div>
            Count: {state.count}
            <button onClick={atChangeNumber}>increment</button>
            <button onClick={atChangeNumber}>decrement</button>
            <button onClick={atChangeNumber}>reset</button>
        </div>
    );
};

export default Counter;