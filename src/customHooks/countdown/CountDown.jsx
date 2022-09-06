import MyButton from './MyButton';
import useCountDown from './useCountDown';


const CountDown = () => {

    const data = useCountDown();
    const {value, onStart, onStop} = data;
    let hours = Math.floor(value / (60 * 60 * 60));
    let minutes =Math.floor((value % (60 * 60)) / 60);
    let seconds = Math.floor((value % 3600) % 60);
    console.log(hours,minutes,seconds)
    

    return (
        <div>
            time:
            {hours}: {minutes}: {seconds}
            <MyButton title='start' disable={true} onStart={onStart} />
            <MyButton title='stop' disable={true} onStart={onStop}/>
        </div>
    );
}

export default CountDown;