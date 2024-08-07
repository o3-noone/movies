import React from 'react';
import { Link } from 'react-router-dom';

const CategoryItem = ({ item, baza, count, width }) => {

    const selectWidth = width / 100
    const reviewsWidth = (selectWidth * 90) / 5
    const reviewsWidth2 = (selectWidth * 90) / 4
    const reviewsWidth3 = (selectWidth * 90) / 3
    const reviewsWidth4 = (selectWidth * 90) / 2
    const getMinWidth = () => {
        if (width >= 1600) return `${reviewsWidth}px`;
        if (width <= 1600 && width >= 1560) return `${reviewsWidth}px`;
        if (width <= 1560 && width >= 1000) return `${reviewsWidth}px`;
        if (width <= 1000 && width >=770) return `${reviewsWidth2}px`
        if (width <= 770 && width >=550) return `${reviewsWidth3}px`
        return `${reviewsWidth4}px`;
    };

    const formatTitle = (title) => {
        let formattedTitle = title.replace(/[^\w\s]/g, '-');
        formattedTitle = formattedTitle.replace(/-+/g, '-');
        formattedTitle = formattedTitle.replace(/\s+/g, '-');
        formattedTitle = formattedTitle.replace(/^-+|-+$/g, '');
        return formattedTitle.toLowerCase();
    };

    return (
        <li className='category-item' style={{ transform: `translateX(-${(count - 1) * 100}% )`, minWidth: getMinWidth() }}>
            <div className="category-items">
                <Link to={`/movies/${formatTitle(item.name)}/${item.id}`}>
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
            </div>
        </li>
    );
};

export default CategoryItem;
