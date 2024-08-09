import React from 'react';
import "./loading.css";
import logo from "./Logo.svg"
const Loading = ({ dataLength }) => {
    const maxDataLength = 10000;
    const widthPercentage = (dataLength / maxDataLength) * 100;

    return (
        <div className='loading'>
            <div className="loading-ind">
                <img src={logo} alt="logo" />
                <div className="indBox">
                    <span style={{ width: `${widthPercentage}%` }}></span>
                </div>
                Loading... {dataLength/100}%
            </div>
        </div>
    );
}

export default Loading;
