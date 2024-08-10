import React, { useEffect, useRef, useState } from 'react';
import "./moviesBox.css";
import BoxItem from '../boxItem/boxItem';
import OneItem from '../oneItem/oneItem';
import New from '../new/new';
import { Link } from 'react-router-dom';
import MustMovie from '../must/mustMovie';

const MoviesBox = ({ baza, width }) => {
    const inMovieBox = useRef(null);
    const [divWidth, setDivWidth] = useState(0);
    const [data, setData] = useState([]);
    const [number, setNumber] = useState(1);

    useEffect(() => {
        if (inMovieBox.current) {
            setDivWidth(inMovieBox.current.offsetWidth);
        }
    }, [width]);

    const key = "46ec25609ba3e9b8903dc225769a8f80";

    const fetchData = async () => {
        try {
            const response = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${key}`);
            const result = await response.json();
            setData(result.genres);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const getDataLength = () => {
        if (divWidth <= 1920 && divWidth >= 1000) return 4;
        if (divWidth <= 999 && divWidth >= 770) return 3;
        if (divWidth <= 769 && divWidth >= 550) return 2;
        return 1;
    };

    useEffect(() => {
        if (number > data.length - getDataLength()) {
            setNumber(1);
        } else if (number <= 0) {
            setNumber(data.length - getDataLength());
        }
    }, [number, data.length, getDataLength]);

    const reviewsWidth = divWidth / 5;
    const reviewsWidth1 = divWidth / 4;
    const reviewsWidth2 = divWidth / 3;
    const reviewsWidth3 = divWidth / 2;

    const getMinWidth = () => {
        if (width >= 1600) return `${reviewsWidth}px`;
        if (width <= 1600 && width >= 1360) return `${reviewsWidth}px`;
        if (width <= 1360 && width >= 1000) return `${reviewsWidth1}px`;
        if (width <= 1000 && width >= 770) return `${reviewsWidth2}px`;
        if (width <= 770 && width >= 550) return `${reviewsWidth3}px`;
        return `${reviewsWidth3}px`;
    };

    const formatTitle = (title) => {
        let formattedTitle = title.replace(/[^\w\s]/g, '-');
        formattedTitle = formattedTitle.replace(/-+/g, '-');
        formattedTitle = formattedTitle.replace(/\s+/g, '-');
        formattedTitle = formattedTitle.replace(/^-+|-+$/g, '');
        return formattedTitle;
    };

    return (
        <>
            <div className='moviesBox'>
                <p className="title">Movies</p>
                <div className="moviesTitle">
                    <h1>Our Genres</h1>
                    {width >= 771 ? (
                        <div className="dots-movie">
                            <button className="dots-inc" onClick={() => setNumber(number - 1)}>
                                <i className="fa-solid fa-arrow-left"></i>
                            </button>
                            <span className={`dot ${number < 5 ? "dot-active" : ""}`} onClick={() => setNumber(1)}></span>
                            <span className={`dot ${number > 4 && number < 9 ? "dot-active" : ""}`} onClick={() => setNumber(5)}></span>
                            <span className={`dot ${number > 8 && number < 13 ? "dot-active" : ""}`} onClick={() => setNumber(9)}></span>
                            <span className={`dot ${number > 12 ? "dot-active" : ""}`} onClick={() => setNumber(data.length - getDataLength())}></span>
                            <button className="dots-inc" onClick={() => setNumber(number + 1)}>
                                <i className="fa-solid fa-arrow-right"></i>
                            </button>
                        </div>
                    ) : ""}
                </div>

                <div className="categoryList-box" ref={inMovieBox}>
                    <ul className="category-list">
                        {data.map((genre, index) => (
                            <li
                                className='category-item'
                                key={index+1}
                                style={{ transform: `translateX(-${(number - 1) * 100}% )`, minWidth: getMinWidth() }}
                            >
                                <div className="category-items">
                                    <Link to={`/movies/${formatTitle(genre.name.toLowerCase())}`}>
                                        <div className='category-imgs'>
                                            {baza
                                                .filter(movie => movie.genre_ids.includes(genre.id))
                                                .slice(0, 4)
                                                .map((movie, index) => (
                                                    <img
                                                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                                        alt={movie.title}
                                                        key={index+1}
                                                    />
                                                ))
                                            }
                                            <p>{genre.name} <i className="fa-solid fa-arrow-right"></i></p>
                                        </div>
                                    </Link>
                                </div>
                            </li>
                        ))}
                    </ul>
                    {width <= 770 ? (
                        <>
                            <div className="dots2">
                                <span className={`dot ${number >= 1 && number <= 4 ? "dot-active" : ""}`}></span>
                                <span className={`dot ${number > 4 && number <= 8 ? "dot-active" : ""}`}></span>
                                <span className={`dot ${number > 8 && number <= 12 ? "dot-active" : ""}`}></span>
                                <span className={`dot ${number > 12 ? "dot-active" : ""}`}></span>
                            </div>
                            <button className="dots-inc2" onClick={() => setNumber(prev => prev - 1)}>
                                <i className="fa-solid fa-arrow-left"></i>
                            </button>
                            <button className="dots-inc3" onClick={() => setNumber(prev => prev + 1)}>
                                <i className="fa-solid fa-arrow-right"></i>
                            </button>
                        </>
                    ) : ""}
                </div>
                <BoxItem width={divWidth} minWidth2={getMinWidth()} baza={baza} />
                <OneItem width={divWidth} minWidth2={getMinWidth()} baza={baza} />
                <New width={divWidth} minWidth2={getMinWidth()} baza={baza} />
                <MustMovie width={divWidth} minWidth2={getMinWidth()} baza={baza} number={number} setNumber={setNumber} />
            </div>
        </>
    );
}

export default MoviesBox;
