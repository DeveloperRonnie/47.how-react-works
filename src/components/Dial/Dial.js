import React from 'react';

const Dial = (props) => {
    return (
        <div style={{ border: '1px solid blue', margin: '10px', padding: '20px' }}>
            <h3>this is dial</h3>
            <p>steps so far : {props.Steps}</p>
        </div>
    );
};

export default Dial;


