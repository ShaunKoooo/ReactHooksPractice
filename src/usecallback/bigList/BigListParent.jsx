import { useCallback, useState } from 'react';
import BigListChild from './BigListChild';

const longListArr = [
    'test1',
    'test2',
    'test3',
    'test4',
    'test5',
    'test6',
    'test7',
]

const BigListParent = () => {
    const [ischeck, setCheck] = useState(false);

    const onSetCheck = () => {
        setCheck(!ischeck);
    }
    
    const onClickItem = useCallback(() => {
        console.log('you clicked');
    }, []);

    // const onClickItem = () => {
    //     console.log('you clicked');
    // };



    return (
        <div>
            <BigListChild
                data={longListArr}
                onClickItem={onClickItem}
            />
            <div onClick={onSetCheck}>ischeck</div>
        </div>
    );
};

export default BigListParent