import {memo} from 'react';

const BigListChild = (props) => {
    const {data, onClickItem} = props;
    console.log('7777')
    return (
        <div>
            {data?.map((item, idx) => {
                return <div onClick={onClickItem} key={item + idx}>{item}</div>
            })}
        </div>
    );
};

export default memo(BigListChild);