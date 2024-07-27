import React, { useState } from 'react';

const MoviesItem = ({ item, count }) => {
    const [add, setAdd] = useState(false);
    const [like, setLike] = useState(false);
    const [music, setMusic] = useState(false);

    return (
        <div
            style={{ 
                backgroundImage: `url(${item.backdrop_path ? `https://image.tmdb.org/t/p/original/${item.backdrop_path}` : `https://image.tmdb.org/t/p/original/${item.poster_path}`})`,
                transform: `translateX(-${count * 100}%)`
            }}
            className='movies-item'
        >
            <div className="movies-title">
                <div className="movies-box">
                    <div className="movie-text">
                        <h3>{item.title}</h3>
                        <p>{item.overview}</p>
                    </div>
                    <div className="movie-btns">
                        <button className="movie-play" aria-label="Play Now">Play Now</button>
                        <button 
                            className='movie-btn' 
                            onClick={() => setAdd(!add)}
                            aria-label={add ? "Remove from list" : "Add to list"}
                        >
                            {add ? <i className="fa-solid fa-minus"></i> : <i className="fa-solid fa-plus"></i>}
                        </button>
                        <button 
                            className='movie-btn' 
                            onClick={() => setLike(!like)}
                            aria-label={like ? "Dislike" : "Like"}
                        >
                            {like ? <i className="fa-regular fa-thumbs-down"></i> : <i className="fa-regular fa-thumbs-up"></i>}
                        </button>
                        <button 
                            className='movie-btn' 
                            onClick={() => setMusic(!music)}
                            aria-label={music ? "Mute" : "Unmute"}
                        >
                            {music ? <i className="fa-solid fa-volume-xmark"></i> : <i className="fa-solid fa-volume-high"></i>}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MoviesItem;
