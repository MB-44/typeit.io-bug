import React, {useState, useEffect} from 'react';
import "./timer.css";

const CountDownTimer = ({initialTime}) => {
    const [time, setTime] = useState(initialTime)

    useEffect(() => {
        if (time > 0) {
            const intervalId = setInterval(() => {
                setTime((prevTime) => prevTime - 1);
            }, 1000);

            return () => clearInterval(intervalId);
        }
    }, [time]);

    useEffect(() => {
        setTime(initialTime);
    }, [initialTime]);



    return (
        <div className='count-down-timer'>
            {time == 0 ? (
                <span>Time's up</span>
            ) : (
                <span>{formatTime(time)}</span>
            )}
        </div>
    );
};

const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0': ''}${remainingSeconds}`;
};

export default CountDownTimer;