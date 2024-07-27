import React from 'react'
import "./device.css"
const Device = () => {
    return (
        <div className='device-container p4'>
            <div className="device-title">
                <h4>We Provide you streaming experience across various devices.</h4>
                <p>With StreamVibe, you can enjoy your favorite movies and TV shows anytime, anywhere. Our platform is designed to be compatible with a wide range of devices, ensuring that you never miss a moment of entertainment.</p>
            </div>

            <ul className="device-list">
                <li className="device-item">
                    <div className="device-top">
                        <div className="device-icon">
                           <i className="fa-solid fa-mobile-button"></i>
                        </div>
                        <h4>Smartphones</h4>
                    </div>
                    <p>StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store</p>
                </li>
                <li className="device-item">
                    <div className="device-top">
                        <div className="device-icon">
                        <i className="fa-solid fa-tablet-button"></i>
                        </div>
                        <h4>Tablet</h4>
                    </div>
                    <p>StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store</p>
                </li>
                <li className="device-item">
                    <div className="device-top">
                        <div className="device-icon">
                        <i className="fa-solid fa-tv"></i>
                        </div>
                        <h4>Smart TV</h4>
                    </div>
                    <p>StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store</p>
                </li>
                <li className="device-item">
                    <div className="device-top">
                        <div className="device-icon">
                        <i className="fa-solid fa-laptop"></i>
                        </div>
                        <h4>Laptops</h4>
                    </div>
                    <p>StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store</p>
                </li>
                <li className="device-item">
                    <div className="device-top">
                        <div className="device-icon">
                        <i className="fa-solid fa-gamepad"></i>
                        </div>
                        <h4>Gaming Consoles</h4>
                    </div>
                    <p>StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store</p>
                </li>
                <li className="device-item">
                    <div className="device-top">
                        <div className="device-icon">
                        <i className="fa-solid fa-vr-cardboard"></i>
                        </div>
                        <h4>VR Headsets </h4>
                    </div>
                    <p>StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store</p>
                </li>
            </ul>
        </div>
    )
}

export default Device