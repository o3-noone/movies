import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./mustMovie.css"

const MustMovie = ({ width, number, setNumber, baza, minWidth2 }) => {

    const defData = baza.slice(0, 20)
    const getDataLength = () => {
        if (width <= 1920 && width >= 1000) return 4;
        if (width <= 999 && width >= 770) return 3;
        if (width <= 769 && width >= 550) return 2;
        return 1;
    };

    useEffect(() => {
        if (number > (defData - getDataLength())) {
            setNumber(1);
        } else if (number <= 0) {
            setNumber(defData - getDataLength());
        }
    }, [number, baza]);

    const formatTitle = (title) => {
        if (!title) return ''; 
        let formattedTitle = title.replace(/[^\w\s]/g, '-');
        formattedTitle = formattedTitle.replace(/-+/g, '-');
        formattedTitle = formattedTitle.replace(/\s+/g, '-');
        formattedTitle = formattedTitle.replace(/^-+|-+$/g, '');
        return formattedTitle.toLowerCase();
    };
    const sortData = defData.sort((a, b) => b.vote_count - a.vote_count)


    return (
        <div className='mustMovie'>
            <div className="moviesTitle">
                <h1>Must - Watch Movies</h1>
                {width >= 771 ? (
                    <div className="dots-movie">
                        <button className="dots-inc" onClick={() => setNumber(number - 1)}>
                            <i className="fa-solid fa-arrow-left"></i>
                        </button>
                        <span className={`dot ${number < 5 ? "dot-active" : ""}`} onClick={() => setNumber(1)}></span>
                        <span className={`dot ${number > 4 && number < 9 ? "dot-active" : ""}`} onClick={() => setNumber(5)}></span>
                        <span className={`dot ${number > 8 && number < 13 ? "dot-active" : ""}`} onClick={() => setNumber(9)}></span>
                        <span className={`dot ${number > 12 ? "dot-active" : ""}`} onClick={() => setNumber(baza.length - getDataLength())}></span>
                        <button className="dots-inc" onClick={() => setNumber(number + 1)}>
                            <i className="fa-solid fa-arrow-right"></i>
                        </button>
                    </div>
                ) : null}
            </div>

            <div className="categoryList-box">
                <ul className="category-list">
                    {sortData.length >= 1 ? sortData.map((item, index) => (
                        <li className='category-item' key={index + 1} style={{ transform: `translateX(-${(number - 1) * 100}% )`, minWidth:minWidth2 }}>
                            <div className="category-items">
                                <Link to={`/movies/${formatTitle(item.title)}/${item.id}`}>
                                    <div className='genres-imgs movieImg'>
                                        <img
                                            src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                                            alt={item.title}
                                        />
                                        <div className="genresText">
                                            <h4 className="genres-film"> {item.title.slice(0, 20)}{item.title.length <= 20 ? "" : <>...</>}</h4>
                                            <div className="genres-rating">
                                                <span><i className='fa-solid fa-star'></i> {item.vote_average}/10 </span>
                                                <p>{item.release_date}</p>
                                            </div>
                                        </div>
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

                ) : <></>}
            </div>
        </div>
    );
};

export default MustMovie;
