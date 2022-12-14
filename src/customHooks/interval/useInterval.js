
import { useEffect, useRef } from "react"

function useInterval (callback, delay){
    const ref = useRef();
    useEffect(() => {
        ref.current = callback;
    }, [callback]);

    useEffect(() => {
        function tick () {
            ref.current();
        }
        if (delay !== null) {
            let id = setInterval(tick, delay);
            return () => clearInterval(id);
        }
    }, [delay]);
}

export default useInterval;