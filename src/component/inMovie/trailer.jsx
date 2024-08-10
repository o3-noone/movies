import React, { useState } from 'react'

const Trailer = ({ setAdd,width, setLike, setMusic, setShowTrailer, item, trailer, showTrailer, add, like, music }) => {
    return (
        <>
            {!showTrailer ? (
                <div
                    className='movies-item'

                >
                    <span className='moviesBaner'><img src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`} alt={item.title} /></span>
                    <div className="movies-title">
                        <div className="movies-box">
                            <div className="movie-text">
                                <h3>{item.title}</h3>
                               {width<=790? <></> :  <p>{item.overview.slice(0, 200)}...</p>}
                            </div>
                            <div className="movie-btns">
                                <button
                                    className="movie-play"
                                    aria-label={showTrailer ? "Close Trailer" : "Play Trailer"}
                                    onClick={() => setShowTrailer(!showTrailer)}
                                >
                                    {showTrailer ? 'Close Trailer' : 'Play Trailer'}
                                </button>

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
            ) : (
                <div
                    className="movies-item"

                >
                    {trailer && (
                        <iframe
                            width="100%"
                            height="100%"
                            src={`https://www.youtube.com/embed/${trailer.key}?autoplay=${showTrailer ? 1 : 0}&controls=1${music ? "&mute=1" : "&mute=0"}&vq=hd1080`}
                            title="Trailer"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    )}

                    <div className="movies-title2" >
                        <div className="movies-box" >
                            <div className="movie-text">
                                {showTrailer? <></>:<h3>{item.title}</h3>}
                            </div>
                            <div  className={`movie-btns`}>
                                <button
                                    className="movie-play"
                                    aria-label={showTrailer ? "Close Trailer" : "Play Now"}
                                    onClick={() => setShowTrailer(!showTrailer)}
                                >
                                    {showTrailer ? 'Close Trailer' : 'Play Now'}
                                </button>

                                <button
                                    className="movie-btn"
                                    onClick={() => setAdd(!add)}
                                    aria-label={add ? "Remove from list" : "Add to list"}
                                >
                                    {add ? <i className="fa-solid fa-minus"></i> : <i className="fa-solid fa-plus"></i>}
                                </button>
                                <button
                                    className="movie-btn"
                                    onClick={() => setLike(!like)}
                                    aria-label={like ? "Dislike" : "Like"}
                                >
                                    {like ? <i className="fa-regular fa-thumbs-down"></i> : <i className="fa-regular fa-thumbs-up"></i>}
                                </button>
                                <button
                                    className="movie-btn"
                                    onClick={() => setMusic(!music)}
                                    aria-label={music ? "Mute" : "Unmute"}
                                >
                                    {music ? <i className="fa-solid fa-volume-xmark"></i> : <i className="fa-solid fa-volume-high"></i>}
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Trailer