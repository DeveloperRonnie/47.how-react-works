import React from 'react';
import DeviceDetail from '../DeviceDetail/DeviceDetail';

const Device = (props) => {
    return (
        <div>
            <h3>i have: {props.name}  </h3>
            <h4>Price : {props.price}  </h4>
            <DeviceDetail

                price={props.price}

            ></DeviceDetail>
        </div>
    );
};

export default Device;