import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
const New = ({ baza }) => {
    const [number, setNumber] = useState(1);
    const formatTitle = (title) => {
        let formattedTitle = title.replace(/[^\w\s]/g, '-'); 
        formattedTitle = formattedTitle.replace(/-+/g, '-');
        formattedTitle = formattedTitle.replace(/\s+/g, '-');
        formattedTitle = formattedTitle.replace(/^-+|-+$/g, '');
        return formattedTitle;
      };
    useEffect(()=>{
        if (number > 17) {
            setNumber(1);
        } else if (number <= 0) {
            setNumber(16);
        }
     }, [number])
    return (
        <>
            <div className="moviesTitle">
                <h4>New Releases</h4>
                <div className="dots-movie">
                        <button className="dots-inc" onClick={() => {
                            setNumber(number - 1)
                        }}><i className="fa-solid fa-arrow-left"></i></button>
                        <span className={`dot ${number < 5 ? "dot-active" : ""}`} onClick={() => { setNumber(1) }}></span>
                        <span className={`dot ${number >4 && number < 9 ? "dot-active" : ""}`} onClick={() => { setNumber(5) }}></span>
                        <span className={`dot ${number >8 && number < 13 ? "dot-active" : ""}`} onClick={() => { setNumber(9) }}></span>
                        <span className={`dot ${number > 12 ? "dot-active" : ""}`} onClick={() => { setNumber(14) }}></span>
                        <button className="dots-inc" onClick={() => {
                            setNumber(number + 1)
                        }}><i className="fa-solid fa-arrow-right"></i></button>
                    </div>
            </div>
            <ul className="category-list">
                {baza.map((item) => (
                    <li className='category-item' style={{ transform: `translateX(-${(number - 1) * 100}% )` }} key={item.id}>
                        <Link to={`/movies/${formatTitle(item.title.toLowerCase())}`}>
                            <div className='category-imgs movieImg'>
                                <img
                                    src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
                                    alt={item.title}
                                />
                                <div className="filmtext">
                                    <span className='filmTimeCenter'>Released at {item.release_date}</span>
                                </div>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default New;
