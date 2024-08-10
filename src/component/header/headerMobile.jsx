import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from './Logo.svg';

const HeaderMobile = ({ count, setCount }) => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [sidebarOpen, setSidebarOpen] = useState(false);

    useEffect(() => {
        const updateDimensions = () => {
            setScrollPosition(window.scrollY);
        };
        window.addEventListener('scroll', updateDimensions);
        updateDimensions();
        return () => window.removeEventListener('scroll', updateDimensions);
    }, []);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };
    return (
        <div className='header-mobile  p4' style={{backgroundColor: `${scrollPosition>1? "#111" : "#141414"}`, transition: "background-color 0.5s ease"}}>
            <div className="hMobile">
                <div className="h-logo">
                    <NavLink
                        to="/"
                        onClick={() => {
                            setCount(1);
                            localStorage.setItem("headerId", 1);
                        }}
                    >
                        <img src={logo} alt="logo" />
                    </NavLink>
                </div>
                <div className="h-burger" onClick={toggleSidebar}>
                  {sidebarOpen===false?   <i className="fa-solid fa-bars-staggered"></i>: 
                  <i className="fa-solid fa-xmark"></i>
                  }
                </div>
            </div>
            <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
                <ul className="hM-list">
                <div className="h-logo">
                    <NavLink
                        to="/"
                        onClick={() => {
                            setCount(1);
                            localStorage.setItem("headerId", 1);
                            toggleSidebar();
                        }}
                    >
                        <img src={logo} alt="logo" />
                    </NavLink>
                </div>
                    <li className={`h-item ${count === 1 ? "h-active" : ""}`}>
                        <NavLink
                            to="/"
                            onClick={() => {
                                setCount(1);
                                localStorage.setItem("headerId", 1);
                                toggleSidebar();
                            }}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li className={`h-item ${count === 2 ? "h-active" : ""}`}>
                        <NavLink
                            to="/movies"
                            onClick={() => {
                                setCount(2);
                                localStorage.setItem("headerId", 2);
                                toggleSidebar();
                            }}
                        >
                            Movies & Shows
                        </NavLink>
                    </li>
                    <li className={`h-item ${count === 3 ? "h-active" : ""}`}>
                        <NavLink
                            to="/support"
                            onClick={() => {
                                setCount(3);
                                localStorage.setItem("headerId", 3);
                                toggleSidebar();
                            }}
                        >
                            Support
                        </NavLink>
                    </li>
                    <li className={`h-item ${count === 4 ? "h-active" : ""}`}>
                        <NavLink
                            to="/subscriptions"
                            onClick={() => {
                                setCount(4);
                                localStorage.setItem("headerId", 4);
                                toggleSidebar();
                            }}
                        >
                            Subscriptions
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default HeaderMobile;
