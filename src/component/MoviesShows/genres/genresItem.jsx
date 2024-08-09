import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const GenresItem = ({ item, film, formatTitle, divWidth }) => {

    const reviewsWidth = divWidth / 6
    const reviewsWidth2 = divWidth / 5
    const reviewsWidth3 = divWidth / 4
    const reviewsWidth4 = divWidth / 3
    const reviewsWidth5 = divWidth / 2
    
    
    const getMinWidth = () => { 
        if (divWidth >= 1600) return `${reviewsWidth}px`;
        if (divWidth <= 1560 && divWidth >= 1300) return `${reviewsWidth2}px`;
        if (divWidth <= 1300 && divWidth >= 1000) return `${reviewsWidth3}px`
        if (divWidth <= 1000 && divWidth >= 550) return `${reviewsWidth4}px`
        return `${reviewsWidth5}px`;
    };
  
    return (
        <li className='genres-item' style={{ minWidth: `${getMinWidth()}`, maxWidth: `${getMinWidth()}`}}>
            <div className="genres-items">
                <Link to={`/movies/${item.name.toLowerCase()}/${formatTitle(film.title)}/${film.id}`}>
                    <div className='genres-imgs movieImg'>
                        <img
                            src={`https://image.tmdb.org/t/p/w300${film.poster_path}`}
                            alt={film.title}
                        />
                        <div className="genresText">
                            <span className="genres-film"> {film.title}</span>
                        </div>
                    </div>
                </Link>
            </div>
        </li>
    )
}

export default GenresItem