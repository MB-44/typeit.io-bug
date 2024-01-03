import React, { useEffect, useState } from "react";
import './typeTest.css';

const TypeTest = () => {
    const [sentence, setSentence] = useState('');
    const [userInput, setUserInput] = useState('');
    const [startTime, setStartTime] = useState(null);
    const [endTime, setEndTime] = useState(null);
    const [wordsPerMinute, setWordsPerMinute] = useState(0);

    useEffect(() => {
        fetchNewSentence();
    }, []);

    const fetchNewSentence = () => {
        fetch('https://api.quotable.io/random')
            .then(response => response.json())
            .then(data => setSentence(data.content))
            .catch(error => console.error("Error Fetching sentence: ", error));
        
            setUserInput('');
            setStartTime(null);
            setEndTime(null);
            setWordsPerMinute(0);
    };

    const handleInputChange = (e) => {
        const inputValue = e.target.value;
        setUserInput(inputValue);
        
        if (inputValue.trim() === sentence.trim()) {
            const endTime = new Date();
            setEndTime(endTime);

            const wordsTyped = inputValue.trim().split(/\s+/).length;
            const minutes = (endTime - startTime) / 60000;
            const wpm = Math.round(wordsTyped / minutes);
            setWordsPerMinute(wpm);
        };
    };

    const handleStartTyping = () => {
        const startTime = new Date();
        setStartTime(startTime);
    };

    const handleTryAgain = () => {
        fetchNewSentence();
    }

    return (

        <div className="container">
            <div className="select-time-word">
                <button className="time-60s">60s</button>
                <button className="time-30s">30s</button>
                <button className="time-15s">15s</button>
            </div>

            <br /><hr /><br />
            
            <div className="sentence-display">{sentence}</div>
            <textarea 
                className="typing-input"
                value = {userInput}
                onChange={handleInputChange}
                placeholder="start typing..."
                onFocus={handleStartTyping}
            />
            {endTime && (
                <div className="result">
                    <button className="try-again-button" onClick={handleTryAgain}>Try Again</button>
                    <br />
                    Your typing speed: {wordsPerMinute} WPM
                </div>
            )}
        </div> // container class

    )
}

export default TypeTest;
