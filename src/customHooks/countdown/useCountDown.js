
import { useState, useEffect } from "react"


const useCountDown = () => {
    const [isActive, setActivite] = useState(false);
    const [value, setValue] = useState(5);

    useEffect(() => {
        let aaa = setInterval(() => {
            if (isActive) {
                setValue(prev => prev - 1);
            }
        }, 1000);
        console.log('shaun1')
        return () => {
            console.log('shaun2')
            // 依賴變數有變動時會先執行 return func 而後才執行上方函示
            clearInterval(aaa);
        }
    }, [isActive])

    const onStart = () => {
        setActivite(true);
    }
    
    const onStop = () => {
        setActivite(false);
    }


    return {
        isActive,
        value,
        onStart,
        onStop,
    }
}

export default useCountDown;