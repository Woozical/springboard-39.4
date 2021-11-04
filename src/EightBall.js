import { useState } from 'react';
import './EightBall.css';

const EightBall = (props) => {
    const [color, setColor] = useState('black');
    const [text, setText] = useState('Think of a question.');

    const displayAnswer = () => {
        const randAns = props.answers[Math.floor(props.answers.length * Math.random())];
        setColor(randAns.color);
        setText(randAns.msg);
    }

    return (
    <div onClick={displayAnswer} className="EightBall-container" style={{backgroundColor: color}}>
        <p>{text}</p>
    </div>)
}

export default EightBall;