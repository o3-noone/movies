import React, { useEffect, useState } from 'react';
import "./category.css";
import CategoryItem from './categoryItem';
const Category = ({ baza }) => {
    const key = "46ec25609ba3e9b8903dc225769a8f80";
    const [data, setData] = useState([]);
    const [number, setNumber] = useState(1);

    const fetchData = async () => {
        try {
            const response = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${key}`);
            const result = await response.json();
            setData(result.genres);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        if (number > 17) {
            setNumber(1);
        } else if (number <= 0) {
            setNumber(16);
        }
    }, [number]);

    return (
        <div className="category-container p4">
            <div className="category-title">
                <h4>Explore our wide variety of categories</h4>
                <p>Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new</p> 
                <div className="dots">
                <button className="dots-inc" onClick={() => setNumber(prev => prev - 1)}>
                    <i className="fa-solid fa-arrow-left"></i>
                </button>
                <span className={`dot ${number >= 1 && number <= 4 ? "dot-active" : ""}`} ></span>
                <span className={`dot ${number > 4 && number <= 8 ? "dot-active" : ""}`} ></span>
                <span className={`dot ${number > 8 && number <= 12 ? "dot-active" : ""}`} ></span>
                <span className={`dot ${number > 12 ? "dot-active" : ""}`}></span>
                <button className="dots-inc" onClick={() => setNumber(prev => prev + 1)}>
                    <i className="fa-solid fa-arrow-right"></i>
                </button>
            </div>
            </div>
            <ul className="category-list">
                {data && data.map((item) => (
                    <CategoryItem baza={baza} key={item.id} count={number} item={item} />
                ))}
            </ul>
           
        </div>
    );
};

export default Category;
