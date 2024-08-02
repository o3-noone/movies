import React, { useEffect, useState } from 'react'
import "./boxItem.css"
import CategoryItem from '../../Home/category/categoryItem'
const BoxItem = ({ baza }) => {
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
    useEffect(()=>{
        if (number > 16) {
            setNumber(1);
        } else if (number < 1) {
            setNumber(16);
        }
     }, [number])
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
                    {data.map((item) => (
                        <CategoryItem baza={baza} count={number} key={item.id+2} item={item} />
                    ))}
                </ul>
            </div>
        </>
    )
}

export default BoxItem