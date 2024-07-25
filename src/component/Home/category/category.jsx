import React, { useEffect, useState } from 'react';
import "./category.css";
import CategoryItem from './categoryItem';
const Category = ({ baza }) => {
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
    }, []);

    return (
        <div className="category-container p4">
            <div className="category-title">
                <h4>Explore our wide variety of categories</h4>
                <p>Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new</p>
            </div>
            <ul className="category-list">
                {data && data.slice(number - 5, number).map((item) => (
                    <CategoryItem baza={baza} key={item.id} item={item} />
                ))}
            </ul>
            <div className="dots">
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
    );
};

export default Category;
