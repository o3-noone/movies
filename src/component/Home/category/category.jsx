import React, { useEffect, useState, useRef } from 'react';
import "./category.css";
import { Link } from 'react-router-dom';

const Category = ({ baza, width }) => {
    const key = "46ec25609ba3e9b8903dc225769a8f80";
    const [data, setData] = useState([]);
    const [number, setNumber] = useState(1);
    const [startX, setStartX] = useState(0); // Track the initial position
    const [dragDistance, setDragDistance] = useState(0); // Track the drag distance

    const fetchData = async () => {
        try {
            const response = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${key}`);
            const result = await response.json();
            setData(result.genres);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const selectWidth = width / 100;
    const reviewsWidth = (selectWidth * 90) / 5;
    const reviewsWidth2 = (selectWidth * 90) / 4;
    const reviewsWidth3 = (selectWidth * 90) / 3;
    const reviewsWidth4 = (selectWidth * 90) / 2;

    const getMinWidth = () => {
        if (width >= 1600) return `${reviewsWidth}px`;
        if (width <= 1600 && width >= 1560) return `${reviewsWidth}px`;
        if (width <= 1560 && width >= 1000) return `${reviewsWidth}px`;
        if (width <= 1000 && width >= 770) return `${reviewsWidth2}px`;
        if (width <= 770 && width >= 550) return `${reviewsWidth3}px`;
        return `${reviewsWidth4}px`;
    };

    const formatTitle = (title) => {
        return title
            .replace(/[^\w\s]/g, '-')
            .replace(/-+/g, '-')
            .replace(/\s+/g, '-')
            .replace(/^-+|-+$/g, '');
    };

    const getDataLength = () => {
        if (width <= 1920 && width >= 1000) return 4;
        if (width <= 999 && width >= 770) return 3;
        if (width <= 769 && width >= 550) return 2;
        return 1;
    };

    useEffect(() => {
        if (number > data.length - getDataLength()) {
            setNumber(1);
        } else if (number <= 0) {
            setNumber(data.length - getDataLength());
        }
    }, [number]);

    const handleMouseDown = (e) => {
        setStartX(e.clientX);
    };

    const handleMouseMove = (e) => {
        if (startX !== 0) {
            setDragDistance(e.clientX - startX);
        }
    };

    const handleMouseUp = () => {
        console.log(`Dragged distance: ${Math.abs(dragDistance)} pixels`);
        setStartX(0);
        setDragDistance(0);
    };

    return (
        <div className="category-container p4">
            <div className="category-title">
                <div className='top-category'>
                    <h4>Explore our wide variety of categories</h4>
                    <p>Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new</p>
                </div>
                {width >= 771 ? (
                    <div className="dots">
                        <button className="dots-inc" onClick={() => setNumber(prev => prev - 1)}>
                            <i className="fa-solid fa-arrow-left"></i>
                        </button>
                        <span className={`dot ${number >= 1 && number <= 4 ? "dot-active" : ""}`}></span>
                        <span className={`dot ${number > 4 && number <= 8 ? "dot-active" : ""}`}></span>
                        <span className={`dot ${number > 8 && number <= 12 ? "dot-active" : ""}`}></span>
                        <span className={`dot ${number > 12 ? "dot-active" : ""}`}></span>
                        <button className="dots-inc" onClick={() => setNumber(prev => prev + 1)}>
                            <i className="fa-solid fa-arrow-right"></i>
                        </button>
                    </div>
                ) : null}
            </div>
            <div className="categoryList-box" >
                <ul className="category-list">
                    {data.map((genre, index) => (
                        <li
                            className='category-item'
                            key={index + 1}
                            style={{ transform: `translateX(-${(number - 1) * 100}% )`, minWidth: getMinWidth(), maxWidth: getMinWidth() }}
                            onMouseDown={handleMouseDown}
                            onMouseMove={handleMouseMove}
                            onMouseUp={handleMouseUp}
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
                                                    key={index + 1}
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

                {width <= 770 && (
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
                )}
            </div>
        </div>
    );
};

export default Category;
