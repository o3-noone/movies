import React from 'react';
import "./loading.css";
import logo from "./Logo.svg"
const Loading = ({ dataLength }) => {
    const maxDataLength = 5000;
    const widthPercentage = (dataLength / maxDataLength) * 250;
    console.log(dataLength);
    
    return (
        <div className='loading'>
            <div className="loading-ind">
                <img src={logo} alt="logo" />
                <div className="indBox">
                    <span style={{ width: `${widthPercentage}%` }}></span>
                </div>
                Loading... {dataLength/20}%
            </div>
        </div>
    );
}

export default Loading;
