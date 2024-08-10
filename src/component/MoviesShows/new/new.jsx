import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const New = ({ baza, width, minWidth2 }) => {
    const [number, setNumber] = useState(1);
    const [randomData, setRandomData] = useState([]);

    const formatTitle = (title) => {
        let formattedTitle = title.replace(/[^\w\s]/g, '-');
        formattedTitle = formattedTitle.replace(/-+/g, '-');
        formattedTitle = formattedTitle.replace(/\s+/g, '-');
        formattedTitle = formattedTitle.replace(/^-+|-+$/g, '');
        return formattedTitle.toLowerCase();
    };

    const getDataLength = () => {
        if (width <= 1920 && width >= 1000) return 5;
        if (width <= 999 && width >= 770) return 4;
        if (width <= 769 && width >= 550) return 3;
        return 2;
    };

    const getRandomElements = (arr) => {
        const shuffled = arr.slice().sort(() => 0.5 - Math.random());
        return shuffled.slice(0, baza.length);
    };

    useEffect(() => {
        setRandomData(getRandomElements(baza));
    }, [baza]);

    useEffect(() => {
        if (number > randomData.slice(0,20).length - getDataLength()) {
            setNumber(1);
        } else if (number <= 0) {
            setNumber(randomData.slice(0, 20).length - getDataLength());
        }
    }, [number]);
const sortRandData=randomData.slice(0, 20).sort((a, b)=>b.release_date.slice(0, 4)-a.release_date.slice(0, 4))

    return (
        <>
            <div className="moviesTitle">
                <h1>New Releases</h1>
                {width >= 771 ? (
                    <div className="dots-movie">
                        <button className="dots-inc" onClick={() => setNumber((prev) => prev - 1)}>
                            <i className="fa-solid fa-arrow-left"></i>
                        </button>
                        <span className={`dot ${number >= 1 && number <= 9 ? "dot-active" : ""}`}></span>
                        <span className={`dot ${number > 9 && number <= 18 ? "dot-active" : ""}`}></span>
                        <span className={`dot ${number > 18 && number <= 27 ? "dot-active" : ""}`}></span>
                        <span className={`dot ${number > 27 ? "dot-active" : ""}`}></span>
                        <button className="dots-inc" onClick={() => setNumber((prev) => prev + 1)}>
                            <i className="fa-solid fa-arrow-right"></i>
                        </button>
                    </div>
                ) : ""}
            </div>
            <div className="categoryList-box">
                <ul className="category-list">
                    {sortRandData.length>=1? sortRandData.map((item, index) => (
                        <li className='category-item' style={{ transform: `translateX(-${(number - 1) * 100}% )`, minWidth: minWidth2 }} key={index+1}>
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
                    )): <>
                    {[1, 2, 3, 4, 5].map((item, index)=>(
                         <div className="load" key={index+1} style={{minWidth: minWidth2}}>
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
                            <span className={`dot ${number < 5 ? "dot-active" : ""}`} onClick={() => { setNumber(1) }}></span>
                            <span className={`dot ${number > 4 && number < 9 ? "dot-active" : ""}`} onClick={() => { setNumber(5) }}></span>
                            <span className={`dot ${number > 8 && number < 13 ? "dot-active" : ""}`} onClick={() => { setNumber(9) }}></span>
                            <span className={`dot ${number > 12 ? "dot-active" : ""}`} onClick={() => { setNumber(14) }}></span>
                        </div>
                        <button className="dots-inc2" onClick={() => setNumber((prev) => prev - 1)}>
                            <i className="fa-solid fa-arrow-left"></i>
                        </button>
                        <button className="dots-inc3" onClick={() => setNumber((prev) => prev + 1)}>
                            <i className="fa-solid fa-arrow-right"></i>
                        </button>
                    </>
                ) : ""}
            </div>
        </>
    );
};

export default New;
