import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./oneItem.css";

const OneItem = ({ baza }) => {
    const [number, setNumber] = useState(5);

    useEffect(() => {
        if (number > 20) {
            setNumber(5);
        } else if (number <= 0) {
            setNumber(20);
        }
    }, [number]);
console.log(baza);
    return (
        <>
            <div className="moviesTitle">
                <h4>Trending Now</h4>
                <div className="dots-movie">
                    <button className="dots-inc" onClick={() => {
                        setNumber(number - 5);
                    }}><i className="fa-solid fa-arrow-left"></i></button>
                    <span className={`dot ${number === 5 ? "dot-active" : ""}`} onClick={() => { setNumber(5); }}></span>
                    <span className={`dot ${number === 10 ? "dot-active" : ""}`} onClick={() => { setNumber(10); }}></span>
                    <span className={`dot ${number === 15 ? "dot-active" : ""}`} onClick={() => { setNumber(15); }}></span>
                    <span className={`dot ${number === 20 ? "dot-active" : ""}`} onClick={() => { setNumber(20); }}></span>
                    <button className="dots-inc" onClick={() => {
                        setNumber(number + 5);
                    }}><i className="fa-solid fa-arrow-right"></i></button>
                </div>
            </div>
            <ul className="category-list">
                {baza && baza.slice(number - 5, number).map((item) => (
                    <li className='category-item' key={item.id}>
                        <Link to={`/${item.title}`}>
                            <div className='category-imgs movieImg'>
                                <img
                                    src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
                                    alt={item.title}
                                />
                                <div className="filmtext">
                                    <span className='filmTime'><i className="fa-regular fa-clock"></i> 1h 30min</span>
                                    <span className='filmView'><i className="fa-regular fa-eye"></i> {item.vote_count}</span>
                                </div>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default OneItem;
