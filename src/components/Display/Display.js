import React from 'react';
import Dial from '../Dial/Dial';

const Display = (props) => {
    return (
        <div style={{ border: '2px solid red', margin: '30px', padding: '30px' }}>
            <h2>name: {props.name}</h2>
            <p>staps: {props.Steps}</p>
            <Dial
                Steps={props.Steps}
            ></Dial>
        </div>
    );
};

export default Display;