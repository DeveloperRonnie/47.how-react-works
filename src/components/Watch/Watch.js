import React, { useState } from 'react';
import Display from '../Display/Display';
import Tablet from '../Tablet/Tablet';

const Watch = () => {
    const [Steps, setSteps] = useState(0);
    const inCreaseSteps = () => {
        const newSpetpsCount = Steps + 1;
        setSteps(newSpetpsCount)
    }
    return (
        <div style={{ border: '2px solid green', margin: '20px', padding: '10px' }}>
            <h2>This is my smart watch</h2>
            <h3>My Current Steps {Steps}</h3>
            <button onClick={inCreaseSteps}>De Door!</button>
            <Display name='garmin' Steps={Steps}></Display>
            <Tablet></Tablet>
        </div>
    );
};

export default Watch; 