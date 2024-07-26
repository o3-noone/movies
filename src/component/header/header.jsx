import React from 'react';
import './header.css';
import logo from './Logo.svg';
import { Link, NavLink } from 'react-router-dom';

const Header = ({ count, setCount }) => {
    return (
        <div className='header p4'>
            <div className="h-logo">
                <NavLink
                    to="/"
                    onClick={() => setCount(1)}

                >
                    <img src={logo} alt="logo" />
                </NavLink>
            </div>
            <ul className="h-list">
                <li className={`h-item ${count === 1 ? "h-active" : ""}`}>
                    <NavLink
                        to="/"
                        onClick={() => setCount(1)}

                    >
                        Home
                    </NavLink>
                </li>
                <li className={`h-item ${count === 2 ? "h-active" : ""}`}>
                    <NavLink
                        to="/movies"
                        onClick={() => setCount(2)}
                    >
                        Movies & Shows
                    </NavLink>
                </li>
                <li className={`h-item ${count === 3 ? "h-active" : ""}`}>
                    <NavLink
                        to="/support"
                        onClick={() => setCount(3)}
                    >
                        Support
                    </NavLink>
                </li>
                <li className={`h-item ${count === 4 ? "h-active" : ""}`}>
                    <NavLink
                        to="/subscriptions"
                        onClick={() => setCount(4)}
                    >
                        Subscriptions
                    </NavLink>
                </li>
            </ul>
            <div className="h-burger">
            <i className="fa-solid fa-bars-staggered"></i>
            </div>
            <div className="h-btns">
                <button><i className="fa-solid fa-magnifying-glass"></i></button>
                <button><i className="fa-regular fa-bell"></i></button>
            </div>
        </div>
    );
};

export default Header;
