import React, { useEffect, useRef, useState } from 'react'
import "./boxItem.css"
import { Link } from 'react-router-dom';
const BoxItem = ({ baza, width, minWidth2 }) => {
    const inMovieBox = useRef(null);
    const key = "46ec25609ba3e9b8903dc225769a8f80";
    const [data, setData] = useState([]);
    const [number, setNumber] = useState(1)
    useEffect(() => {
        if (inMovieBox.current) {
            setDivWidth(inMovieBox.current.offsetWidth);
        }
    }, [baza]);
    const fetchData = async () => {
        try {
            const response = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${key}`);
            const result = await response.json();
            setData(result.genres.slice(0, 10));
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    const getDataLength = () => {
        if (width <= 1920 && width >= 1000) return 4;
        if (width <= 999 && width >= 770) return 3;
        if (width <= 769 && width >= 550) return 2
        return 1
    }


    useEffect(() => {
        if (number > data.length - getDataLength()) {
            setNumber(1);
        } else if (number <= 0) {
            setNumber(data.length - getDataLength());
        }
    }, [number]);
    useEffect(() => {
        fetchData();
    }, []);

    const formatTitle = (title) => {
        let formattedTitle = title.replace(/[^\w\s]/g, '-');
        formattedTitle = formattedTitle.replace(/-+/g, '-');
        formattedTitle = formattedTitle.replace(/\s+/g, '-');
        formattedTitle = formattedTitle.replace(/^-+|-+$/g, '');
        return formattedTitle.toLowerCase();
    };

    return (
        <>
            <div className='BoxItem'>
                <div className="moviesTitle">
                    <h1>Popular Top 10 In Genres</h1>
                    {width >= 771 ? <><div className="dots-movie">
                        <button className="dots-inc" onClick={() => {
                            setNumber(number - 1)
                        }}><i className="fa-solid fa-arrow-left"></i></button>
                        <span className={`dot ${number < 4 ? "dot-active" : ""}`} onClick={() => { setNumber(1) }}></span>
                        <span className={`dot ${number > 3 ? "dot-active" : ""}`} onClick={() => { setNumber(data.length - getDataLength()) }}></span>
                        <button className="dots-inc" onClick={() => {
                            setNumber(number + 1)
                        }}><i className="fa-solid fa-arrow-right"></i></button>
                    </div></> : ""}
                </div>
                <div className="categoryList-box">
                    <ul className="category-list">
                        {data.length >= 1 ? data.map((genre, index) => (
                            <li className='category-item' key={index+1} style={{ transform: `translateX(-${(number - 1) * 100}% )`, minWidth: minWidth2 }}>
                                <div className="category-items">
                                    <Link to={`/movies/${formatTitle(genre.name)}`}>
                                        <div className='category-imgs'>
                                            {baza.filter(movie => movie.genre_ids.includes(genre.id))
                                                .slice(0, 4).map((movie, index) => (
                                                <img
                                                    src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                                                    alt={movie.title}
                                                    key={index+1}
                                                />
                                            ))}
                                            <p>{genre.name} <i className="fa-solid fa-arrow-right"></i></p>
                                        </div>
                                    </Link>
                                </div>
                            </li>
                        )) : <>
                            {[1, 2, 3, 4, 5].map((item, index) => (
                                <div className="load" key={index + 1} style={{ minWidth: minWidth2 }}>
                                    <div className="wrapper">
                                        <div className="cir"></div>

                                        <div className="line-4"></div>
                                    </div>
                                </div>
                            ))}
                        </>}

                    </ul>
                    {width <= 770 ? <><div className="dots2">
                        <span className={`dot ${number < 5 ? "dot-active" : ""}`} onClick={() => { setNumber(1) }}></span>
                        <span className={`dot ${number > 4 ? "dot-active" : ""}`} onClick={() => { setNumber(6) }}></span>

                    </div>
                        <button className="dots-inc2" onClick={() => setNumber(prev => prev - 1)}>
                            <i className="fa-solid fa-arrow-left"></i>
                        </button>
                        <button className="dots-inc3" onClick={() => setNumber(prev => prev + 1)}>
                            <i className="fa-solid fa-arrow-right"></i>
                        </button></> : ""}
                </div>
            </div>
        </>
    )
}

export default BoxItem