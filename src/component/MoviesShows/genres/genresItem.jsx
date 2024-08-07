import React from 'react'
import { Link } from 'react-router-dom'

const GenresItem = ({ item, film, formatTitle }) => {
    return (
        <li className='genres-item'>
            <div className="genres-items">
                <Link to={`/movies/${item.name.toLowerCase()}/${formatTitle(film.title)}`}>
                    <div className='category-imgs movieImg'>
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