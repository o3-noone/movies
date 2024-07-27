import React, { useEffect, useState } from 'react'
import "./boxItem.css"
import CategoryItem from '../../Home/category/categoryItem'
const BoxItem = ({ baza }) => {
    const key = "46ec25609ba3e9b8903dc225769a8f80";
    const [data, setData] = useState([]);
    const [number, setNumber] = useState(4)
    const fetchData = async () => {
        try {
            const response = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${key}`);
            const result = await response.json();
            setData(result.genres);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    if (number > 16) {
        setNumber(4)
    } else if (number <= 0) {
        setNumber(16)
    }
    useEffect(() => {
        fetchData();
    }, []);
    return (
        <>
            <div className='BoxItem'>
                <div className="moviesTitle">
                    <h4>Popular Top 10 In Genres</h4>
                    <div className="dots-movie">
                        <button className="dots-inc" onClick={() => {
                            setNumber(number - 4)
                        }}><i className="fa-solid fa-arrow-left"></i></button>
                        <span className={`dot ${number === 4 ? "dot-active" : ""}`} onClick={() => { setNumber(4) }}></span>
                        <span className={`dot ${number === 8 ? "dot-active" : ""}`} onClick={() => { setNumber(8) }}></span>
                        <span className={`dot ${number === 12 ? "dot-active" : ""}`} onClick={() => { setNumber(12) }}></span>
                        <span className={`dot ${number === 16 ? "dot-active" : ""}`} onClick={() => { setNumber(16) }}></span>
                        <button className="dots-inc" onClick={() => {
                            setNumber(number + 4)
                        }}><i className="fa-solid fa-arrow-right"></i></button>
                    </div>
                </div>
                <ul className="box-list">
                    {data && data.slice(number - 4, number).map((item) => (
                        <CategoryItem baza={baza} key={item.id+2} item={item} />
                    ))}
                </ul>
            </div>
        </>
    )
}

export default BoxItem