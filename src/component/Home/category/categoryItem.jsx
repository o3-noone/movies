import React from 'react';
import { Link } from 'react-router-dom';

const CategoryItem = ({ item, baza }) => {
    const getRandomMovies = (array, num) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array.slice(0, num);
    };

    const randomMovies = getRandomMovies([...baza], 4);
    return (
        <li className='category-item'>
            <Link to={`/${item.name}`}>
                <div className='category-imgs' >
                    {randomMovies.map((movie) => (
                        <img
                            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                            alt={movie.title}
                            key={movie.id}
                        />
                    ))}
                    <p>{item.name} <i className="fa-solid fa-arrow-right"></i></p>
                </div>
            </Link>
        </li>
    );
}

export default CategoryItem;
