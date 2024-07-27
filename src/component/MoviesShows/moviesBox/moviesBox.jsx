import React, { useEffect, useState } from 'react'
import "./moviesBox.css"
import CategoryItem from '../../Home/category/categoryItem'
import BoxItem from '../boxItem/boxItem';
import OneItem from '../oneItem/oneItem';
const MoviesBox = ({ baza }) => {
    const key = "46ec25609ba3e9b8903dc225769a8f80";
    const [data, setData] = useState([]);
    const [number, setNumber] = useState(5)
    // const [zeroNum, setZeroNum]=useState(number-5)
    const fetchData = async () => {
        try {
            const response = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${key}`);
            const result = await response.json();
            setData(result.genres);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    if (number > 20) {
        setNumber(5)
    } else if (number <= 0) {
        setNumber(20)
    }
    useEffect(() => {
        fetchData();
    }, [number  ]);
    return (
        <>
            <div className='moviesBox'>
                <p className="title">
                    Movies
                </p>
                <div className="moviesTitle">
                    <h4>Our Genres</h4>
                    <div className="dots-movie">
                        <button className="dots-inc" onClick={() => {
                            setNumber(number - 5)
                        }}><i className="fa-solid fa-arrow-left"></i></button>
                        <span className={`dot ${number === 5 ? "dot-active" : ""}`} onClick={() => { setNumber(5) }}></span>
                        <span className={`dot ${number === 10 ? "dot-active" : ""}`} onClick={() => { setNumber(10) }}></span>
                        <span className={`dot ${number === 15 ? "dot-active" : ""}`} onClick={() => { setNumber(15) }}></span>
                        <span className={`dot ${number === 20 ? "dot-active" : ""}`} onClick={() => { setNumber(20) }}></span>
                        <button className="dots-inc" onClick={() => {
                            setNumber(number + 5)
                        }}><i className="fa-solid fa-arrow-right"></i></button>
                    </div>
                </div>
                <ul className="category-list">
                    {data && data.slice(number - 5, number).map((item) => (
                        <CategoryItem baza={baza} key={item.id} item={item} />
                    ))}
                </ul>
                <BoxItem baza={baza}/>
                <OneItem baza={baza}/>
            </div>
        </>
    )
}

export default MoviesBox