import React, { useEffect, useState } from 'react'
import "./moviesBox.css"
import CategoryItem from '../../Home/category/categoryItem'
import BoxItem from '../boxItem/boxItem';
import OneItem from '../oneItem/oneItem';
import New from '../new/new';
const MoviesBox = ({ baza, width }) => {
    const key = "46ec25609ba3e9b8903dc225769a8f80";
    const [data, setData] = useState([]);
    const [number, setNumber] = useState(1)
    const fetchData = async () => {
        try {
            const response = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${key}`);
            const result = await response.json();
            setData(result.genres);
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
    }, [number]);
    return (
        <>
            <div className='moviesBox'>
                <p className="title">
                    Movies
                </p>
                <div className="moviesTitle">
                    <h4>Our Genres</h4>
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
                        {data && data.map((item) => (
                            <CategoryItem width={width - 50} baza={baza} key={item.id} count={number} item={item} />
                        ))}

                    </ul>
                    {width <= 770 ? <><div className="dots2">
                        <span className={`dot ${number >= 1 && number <= 4 ? "dot-active" : ""}`} ></span>
                        <span className={`dot ${number > 4 && number <= 8 ? "dot-active" : ""}`} ></span>
                        <span className={`dot ${number > 8 && number <= 12 ? "dot-active" : ""}`} ></span>
                        <span className={`dot ${number > 12 ? "dot-active" : ""}`}></span>
                    </div>
                        <button className="dots-inc2" onClick={() => setNumber(prev => prev - 1)}>
                            <i className="fa-solid fa-arrow-left"></i>
                        </button>
                        <button className="dots-inc3" onClick={() => setNumber(prev => prev + 1)}>
                            <i className="fa-solid fa-arrow-right"></i>
                        </button></> : ""}
                </div>
                <BoxItem width={width} baza={baza} />
                <OneItem width={width-56} baza={baza} />
                <New width={width-56} baza={baza} />
            </div>
        </>
    )
}

export default MoviesBox