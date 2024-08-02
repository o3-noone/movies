import React from 'react';
import { Link } from 'react-router-dom';

const CategoryItem = ({ item, baza, count }) => {
    const formatTitle = (title) => {
        let formattedTitle = title.replace(/[^\w\s]/g, '-'); 
        formattedTitle = formattedTitle.replace(/-+/g, '-');
        formattedTitle = formattedTitle.replace(/\s+/g, '-');
        formattedTitle = formattedTitle.replace(/^-+|-+$/g, '');
        return formattedTitle;
      };

    return (
        <li className='category-item' style={{ transform: `translateX(-${(count - 1) * 100}% )` }}>
            <Link to={`/${formatTitle(item.name.toLowerCase())}`}>
                <div className='category-imgs'>
                    {baza.slice(0, 4).map((movie) => (
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
};

export default CategoryItem;
