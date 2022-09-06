

const MyButton = (props) => {
    const {title, onStart} = props;
    return (
        <button onClick={onStart}>{title}</button>
    );
};

export default MyButton;