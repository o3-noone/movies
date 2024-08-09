import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./oneItem.css";

const OneItem = ({ baza, width }) => {
    const [number, setNumber] = useState(1);
    const selectWidth = width / 100
    const reviewsWidth = (selectWidth * 90) / 5
    const reviewsWidth2 = (selectWidth * 90) / 4
    const reviewsWidth3 = (selectWidth * 90) / 3
    const reviewsWidth4 = (selectWidth * 90) / 2
    const getMinWidth = () => {
        if (width >= 1600) return `${reviewsWidth}px`;
        if (width <= 1600 && width >= 1560) return `${reviewsWidth}px`;
        if (width <= 1560 && width >= 1000) return `${reviewsWidth}px`;
        if (width <= 1000 && width >= 770) return `${reviewsWidth2}px`
        if (width <= 770 && width >= 550) return `${reviewsWidth3}px`
        return `${reviewsWidth4}px`;
    };

    const getDataLength = () => {
        if (width <= 1920 && width >= 1000) return 5;
        if (width <= 999 && width >= 770) return 4;
        if (width <= 769 && width >= 550) return 3
        return 2
    }


    const formatTitle = (title) => {
        let formattedTitle = title.replace(/[^\w\s]/g, '-');
        formattedTitle = formattedTitle.replace(/-+/g, '-');
        formattedTitle = formattedTitle.replace(/\s+/g, '-');
        formattedTitle = formattedTitle.replace(/^-+|-+$/g, '');
        return formattedTitle.toLowerCase();
    };
    const defBaza = baza.slice(0, 20)
    const sortBaza = defBaza.sort((a, b) => b.id - a.id)
    useEffect(() => {
        if (number > sortBaza.length - getDataLength()) {
            setNumber(1);
        } else if (number <= 0) {
            setNumber(sortBaza.length - getDataLength());
        }
    }, [number]);

    return (
        <>
            <div className="moviesTitle">
                <h4>Trending Now</h4>
                {width >= 771 ? <><div className="dots-movie">
                    <button className="dots-inc" onClick={() => {
                        setNumber(number - 1)
                    }}><i className="fa-solid fa-arrow-left"></i></button>
                    <span className={`dot ${number < 5 ? "dot-active" : ""}`} onClick={() => { setNumber(1) }}></span>
                    <span className={`dot ${number > 4 && number < 9 ? "dot-active" : ""}`} onClick={() => { setNumber(5) }}></span>
                    <span className={`dot ${number > 8 && number < 13 ? "dot-active" : ""}`} onClick={() => { setNumber(9) }}></span>
                    <span className={`dot ${number > 12 ? "dot-active" : ""}`} onClick={() => { setNumber(14) }}></span>
                    <button className="dots-inc" onClick={() => {
                        setNumber(number + 1)
                    }}><i className="fa-solid fa-arrow-right"></i></button>
                </div></> : ""}
            </div>
            <div className="categoryList-box">
                <ul className="category-list">
                    {sortBaza.length >=1 ? sortBaza.map((item, index) => (
                        <li className='category-item' style={{ transform: `translateX(-${(number - 1) * 100}% )`, minWidth: getMinWidth() }} key={index + 1}>
                            <div className="category-items">
                                <Link to={`/movies/${formatTitle(item.title)}/${item.id}`}>
                                    <div className='category-imgs movieImg'>
                                        <img
                                            src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                                            alt={item.title}
                                        />
                                        <div className="filmtext">
                                            <span className='filmTime'><i className="fa-regular fa-clock"></i> 1h 29m</span>
                                           <span className='filmView'>
  <i className="fa-regular fa-eye"></i>
  {item.vote_count > 999 ? `${Math.floor(item.vote_count / 1000)}k` : item.vote_count}
</span>
      </div>
                                    </div>
                                </Link>
                            </div>
                        </li>
                    )) : <>
                       {[1, 2, 3, 4, 5].map((item, index)=>(
                         <div className="load" key={index+1} style={{minWidth: getMinWidth()}}>
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
                    <span className={`dot ${number > 4 && number < 9 ? "dot-active" : ""}`} onClick={() => { setNumber(5) }}></span>
                    <span className={`dot ${number > 8 && number < 13 ? "dot-active" : ""}`} onClick={() => { setNumber(9) }}></span>
                    <span className={`dot ${number > 12 ? "dot-active" : ""}`} onClick={() => { setNumber(14) }}></span>

                </div>
                    <button className="dots-inc2" onClick={() => setNumber(prev => prev - 1)}>
                        <i className="fa-solid fa-arrow-left"></i>
                    </button>
                    <button className="dots-inc3" onClick={() => setNumber(prev => prev + 1)}>
                        <i className="fa-solid fa-arrow-right"></i>
                    </button></> : ""}
            </div>
        </>
    );
};

export default OneItem;
