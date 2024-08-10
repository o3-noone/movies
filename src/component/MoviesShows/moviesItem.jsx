import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MoviesItem = ({ item, count, width }) => {
    const [add, setAdd] = useState(false);
    const [like, setLike] = useState(false);
    const [music, setMusic] = useState(false);
    const navigate = useNavigate()
    const formatTitle = (title) => {
        let formattedTitle = title.replace(/[^\w\s]/g, '-');
        formattedTitle = formattedTitle.replace(/-+/g, '-');
        formattedTitle = formattedTitle.replace(/\s+/g, '-');
        formattedTitle = formattedTitle.replace(/^-+|-+$/g, '');
        return formattedTitle;
    };

    return (
        <>
            {item ? <>
                <div
                    style={{
                        transform: `translateX(-${count * 100}%)`
                    }}
                    className='movies-item'
                >
                   <span className='moviesBaner'><img src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`} alt={item.title} /></span>
                   <div className="movies-title">
                        <div className="movies-box">
                            <div className="movie-text">
                                <h3>{item.title}</h3>
                               {width<=790 ? <></> :  <p>{item.overview.slice(0, 200)}...</p>}
                            </div>
                            <div className="movie-btns">
                                <button className="movie-play" onClick={() => {
                                    navigate(`/movies/${formatTitle(item.title.toLowerCase())}/${item.id}`)
                                }} aria-label="Play Now">Play Now</button>
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
            </> : <>
                {[1].map((item, index) => (
                    <div className="load" key={index + 1} style={{ minWidth: getMinWidth() }}>
                        <div className="wrapper">
                            <div className="cir"></div>

                            <div className="line-4"></div>
                        </div>
                    </div>
                ))}
            </>}
        </>
    );
}

export default MoviesItem;
