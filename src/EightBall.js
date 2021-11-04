import { useState } from 'react';
import './EightBall.css';

const EightBall = (props) => {
    const [color, setColor] = useState('black');
    const [text, setText] = useState('Think of a question.');
    const [resCount, setResCount] = useState({green: 0, goldenrod: 0, red: 0});

    const displayAnswer = () => {
        const {color, msg} = props.answers[Math.floor(props.answers.length * Math.random())];
        setColor(color);
        setText(msg);
        const updateCount = {...resCount};
        updateCount[color] += 1;
        setResCount(updateCount);
    }

    const reset = () => {
        setColor('black');
        setText('Think of a question.');
        setResCount({green: 0, goldenrod: 0, red: 0});  
    }

    return (
    <div className="EightBall-container">
        <div onClick={displayAnswer} className="EightBall-circle" style={{backgroundColor: color}}>
            <p>{text}</p>
        </div>
        <button onClick={reset}>Reset</button>
        <p>Yes: {resCount.green} No: {resCount.red} Uncertain: {resCount.goldenrod}</p>
    </div>
    )
}

export default EightBall;