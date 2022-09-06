import { useState, useEffect } from 'react';

const useLoadingHook = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // fetch('https://randomuser.me/api/').then((res) => {
        //     console.log(res);
        // })
        setTimeout(() => {
            // 模擬打 Api 取資料的時間
            setIsLoading(false);
        }, 1000);
    });

    return isLoading;
}

export default useLoadingHook;