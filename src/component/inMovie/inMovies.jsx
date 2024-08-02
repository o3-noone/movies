import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './inMovies.css';
import ScrolTop from '../scrolTop/scrolTop';
import Trial from '../Home/tralFree/trial';

const InMovies = ({ item, width }) => {
    const [add, setAdd] = useState(false);
    const [like, setLike] = useState(false);
    const [music, setMusic] = useState(false);
    const [actors, setActors] = useState([]);
    const [number, setNumber] = useState(1);
    const [reviews, setReviews] = useState([]);
    const [reviewNum, setReviewNum] = useState(1);
    const [trailer, setTrailer] = useState(null);
    const [showTrailer, setShowTrailer] = useState(false);
    const key = "46ec25609ba3e9b8903dc225769a8f80";
    const [data, setData] = useState([]);
    const filterData = data.filter(genre => item.genre_ids.includes(genre.id));
    const fetchData = async () => {
        try {
            const response = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${key}`);
            const result = await response.json();
            setData(result.genres);
        } catch (error) {
        }
    };

    useEffect(() => {
        fetchData();
    }, []);
    const fetchMovieCredits = async () => {
        try {
            const response = await axios.get(`https://api.themoviedb.org/3/movie/${item.id}/credits`, {
                headers: {
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NmVjMjU2MDliYTNlOWI4OTAzZGMyMjU3NjlhOGY4MCIsIm5iZiI6MTcyMjM0MDE0OC45NTgyNjgsInN1YiI6IjY2OWZiZDI2YTcyZmU4MTFkOTUyY2ZiNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Ahm8I_NV9Ux-C8jSqPhZm-1iq-7eKQYi5VwLQdEC0Mw',
                    'Content-Type': 'application/json'
                }
            });
            setActors(response.data.cast);
        } catch (error) {
        }
    };
    const fetchMovieReviews = async () => {
        try {
            const response = await axios.get(`https://api.themoviedb.org/3/movie/${item.id}/reviews`, {
                headers: {
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NmVjMjU2MDliYTNlOWI4OTAzZGMyMjU3NjlhOGY4MCIsIm5iZiI6MTcyMjM0MDE0OC45NTgyNjgsInN1YiI6IjY2OWZiZDI2YTcyZmU4MTFkOTUyY2ZiNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Ahm8I_NV9Ux-C8jSqPhZm-1iq-7eKQYi5VwLQdEC0Mw',
                    'Content-Type': 'application/json'
                }
            });
            setReviews(response.data.results);
        } catch (error) {
        }
    };

    const fetchMovieTrailer = async () => {
        try {
            const response = await axios.get(`https://api.themoviedb.org/3/movie/${item.id}/videos`, {
                headers: {
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NmVjMjU2MDliYTNlOWI4OTAzZGMyMjU3NjlhOGY4MCIsIm5iZiI6MTcyMjM0MDE0OC45NTgyNjgsInN1YiI6IjY2OWZiZDI2YTcyZmU4MTFkOTUyY2ZiNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Ahm8I_NV9Ux-C8jSqPhZm-1iq-7eKQYi5VwLQdEC0Mw',
                    'Content-Type': 'application/json'
                }
            });
            const trailerData = response.data.results.find(video => video.type === 'Trailer' && video.site === 'YouTube');
            setTrailer(trailerData);
        } catch (error) {
        }
    };
    useEffect(() => {
        if (item?.id) {
            fetchMovieCredits();
            fetchMovieReviews();
            fetchMovieTrailer();
        }
    }, [item]);

    useEffect(() => {
        if (number > 9) {
            setNumber(1);
        } else if (number <= 0) {
            setNumber(9);
        }
    }, [number]);

    useEffect(() => {
        if (reviewNum > reviews.length - 1) {
            setReviewNum(1);
        } else if (reviewNum < 1) {
            setReviewNum(reviews.length % 2 === 0 ? reviews.length : reviews.length - 1);
        }
    }, [reviewNum, reviews.length]);

    useEffect(() => {
        const interval = setInterval(() => {
            setReviewNum(prevReviewNum => (prevReviewNum % (reviews.length - 1)) + 1);
        }, 10000);
        return () => clearInterval(interval);
    }, [reviews.length]);

    if (!item) {
        return <div>Loading...</div>;
    }
    const selectWidth = width / 100
    return (
        <>
            <div className="inMovie">
                <ScrolTop />
                {trailer && !showTrailer ? (
                    <div
                        className='movies-item'
                        style={{
                            backgroundImage: `url(${item.backdrop_path ? `https://image.tmdb.org/t/p/original/${item.backdrop_path}` : `https://image.tmdb.org/t/p/original/${item.poster_path}`})`

                        }}
                    >

                        <div className="movies-title">
                            <div className="movies-box">
                                <div className="movie-text">
                                    <h3>{item.title}</h3>
                                    <p>{item.overview}</p>
                                </div>
                                <div className="movie-btns">
                                    <button
                                        className="movie-play"
                                        aria-label={showTrailer ? "Close Trailer" : "Play Now"}
                                        onClick={() => setShowTrailer(!showTrailer)}
                                    >
                                        {showTrailer ? 'Close Trailer' : 'Play Now'}
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
                    <div className="movies-item">
                        {trailer && (
                            <iframe
                                width="100%"
                                height="100%"
                                src={`https://www.youtube.com/embed/${trailer.key}?autoplay=1`} // Add autoplay parameter
                                title="Trailer"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        )}

                        <div className="movies-title2">
                            <div className="movies-box">
                                <div className="movie-text">
                                    <h3>{item.title}</h3>
                                </div>
                                <div className="movie-btns">
                                    <button
                                        className="movie-play"
                                        aria-label={showTrailer ? "Close Trailer" : "Play Now"}
                                        onClick={() => setShowTrailer(!showTrailer)}
                                    >
                                        {showTrailer ? 'Close Trailer' : 'Play Now'}
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
                )}


                <div className="inMovies-text">
                    <div className="inMovise-left">
                        <div className="inMovie-desc" style={{
                            minWidth: width >= 1390 ? 'auto' : `${selectWidth * 90}px`
                        }}>
                            <h4>Description</h4>
                            <p>{item.overview}</p>
                        </div>
                        {width <= 1390 ? <>
                            <div
                                className="inMovie-info inMovie-infoMax"
                                style={{
                                    minWidth: width >= 1390 ? 'auto' : `${selectWidth * 90}px`,
                                    marginTop: "20px",
                                    marginLeft: "0"
                                }}
                            >
                                <div className="inMovie-info-text">
                                    <h4><i className='fa-solid fa-calendar'></i> Released year</h4>
                                    <p>{item.release_date.slice(0, 4)}</p>
                                </div>
                                <div className="inMovie-info-text">
                                    <h4><i className='fa-solid fa-language'></i> Available Languages</h4>
                                    <span className='span-lang'>English</span>
                                </div>
                                <div className="inMovie-info-text">
                                    <h4><i className='fa-solid fa-star'></i> Rating</h4>
                                    <div className="rating-movie">
                                        <span>
                                            <div className="span-text">
                                                IMDb
                                            </div>
                                            <div className="span-rating">
                                                <i className='fa-solid fa-star'></i><i className='fa-solid fa-star'></i><i className='fa-solid fa-star'></i><i className='fa-solid fa-star'></i><i className='fa-solid fa-star'></i>
                                                {item.vote_average - 1.76
                                                }
                                            </div>
                                        </span>
                                        <span>
                                            <div className="span-text">
                                                Streamvibe
                                            </div>
                                            <div className="span-rating">
                                                <i className='fa-solid fa-star'></i><i className='fa-solid fa-star'></i><i className='fa-solid fa-star'></i><i className='fa-solid fa-star'></i><i className='fa-solid fa-star'></i>
                                                {item.vote_average
                                                }
                                            </div>
                                        </span>
                                    </div>
                                </div>
                                <div className="inMovie-info-text">
                                    <h4><i className='fa-solid fa-language'></i> Genres</h4>
                                    <div className='rating-movie'>
                                        {filterData.map((gen) => (
                                            <span key={gen.id} className='span-lang'>{gen.name}</span>
                                        ))}
                                    </div>

                                </div>
                            </div>
                        </> : <></>}
                        <div className="inMovie-cast" style={{
                            minWidth: width >= 1390 ? 'auto' : `${selectWidth * 90}px`
                        }}>
                            <div className="cast-top">
                                <h4>Cast</h4>
                                <div className="cast-btns">
                                    <button onClick={() => { setNumber(number - 1) }}><i className="fa-solid fa-arrow-left"></i></button>
                                    <button onClick={() => { setNumber(number + 1) }}><i className="fa-solid fa-arrow-right"></i></button>
                                </div>
                            </div>
                            <div className="actors-list">
                                {actors.slice(0, 20).map(actor => (
                                    <div key={actor.id} className="actor-item" style={{ transform: `translateX(-${number * 100}%)` }}>
                                        <img
                                            src={`https://image.tmdb.org/t/p/original/${actor.profile_path}`}
                                            alt={actor.name}
                                            className="actor-image"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div
                            className="inMovie-reviews"
                            style={{
                                minWidth: width >= 1390 ? 'auto' : `${selectWidth * 90}px`
                            }}
                        >
                            <div className="reviews-top">
                                <h4>Reviews</h4>
                                <button>+ Add Your Review</button>
                            </div>
                            {reviews.length > 0 ? <>

                                <div className="reviews-list">
                                    {reviews && reviews.map((item, index) => (
                                        <div className="reviews-item" style={{ transform: `translateX(-${(reviewNum - 1) * 100}% )` }} key={index}>
                                            <div className="review-item">
                                                <div className="review-item-top">
                                                    <div className="review-left">
                                                        <h4>{item.author}</h4>
                                                    </div>
                                                    <div className="review-rating">
                                                        <i className='fa-solid fa-star'></i>
                                                        <i className='fa-solid fa-star'></i>
                                                        <i className='fa-solid fa-star'></i>
                                                        <i className='fa-solid fa-star'></i>
                                                        <i className='fa-solid fa-star'></i>
                                                        <p>{item.author_details.rating}</p>
                                                    </div>
                                                </div>
                                                <p className='review-text'>
                                                    {item.content.slice(0, 400)}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="review-btns">
                                    <button onClick={() => { setReviewNum(reviewNum - 1) }} className="review-btn">
                                        <i className="fa-solid fa-arrow-left"></i>
                                    </button>
                                    {reviews && reviews.slice(0, -1).map((item, index) => (
                                        <span className={`review-dot ${reviewNum === index + 1 ? "review-act" : ""}`} onClick={() => { setReviewNum(index + 1) }} key={index}></span>
                                    ))}
                                    <button onClick={() => { setReviewNum(reviewNum + 1) }} className="review-btn">
                                        <i className="fa-solid fa-arrow-right"></i>
                                    </button>
                                </div>
                            </> : <p style={{ color: "white" }}> No Reviews</p>}
                        </div>
                    </div>
                    {width >= 1390 ? <>
                        <div className="inMovie-info">
                            <div className="inMovie-info-text">
                                <h4><i className='fa-solid fa-calendar'></i> Released year</h4>
                                <p>{item.release_date.slice(0, 4)}</p>
                            </div>
                            <div className="inMovie-info-text">
                                <h4><i className='fa-solid fa-language'></i> Available Languages</h4>
                                <span className='span-lang'>English</span>
                            </div>
                            <div className="inMovie-info-text">
                                <h4><i className='fa-solid fa-star'></i> Rating</h4>
                                <div className="rating-movie">
                                    <span>
                                        <div className="span-text">
                                            IMDb
                                        </div>
                                        <div className="span-rating">
                                            <i className='fa-solid fa-star'></i><i className='fa-solid fa-star'></i><i className='fa-solid fa-star'></i><i className='fa-solid fa-star'></i><i className='fa-solid fa-star'></i>
                                            {item.vote_average - 1.76
                                            }
                                        </div>
                                    </span>
                                    <span>
                                        <div className="span-text">
                                            Streamvibe
                                        </div>
                                        <div className="span-rating">
                                            <i className='fa-solid fa-star'></i><i className='fa-solid fa-star'></i><i className='fa-solid fa-star'></i><i className='fa-solid fa-star'></i><i className='fa-solid fa-star'></i>
                                            {item.vote_average
                                            }
                                        </div>
                                    </span>
                                </div>
                            </div>
                            <div className="inMovie-info-text">
                                <h4><i className='fa-solid fa-language'></i> Genres</h4>
                                <div className='rating-movie'>
                                    {filterData.map((gen) => (
                                        <span key={gen.id} className='span-lang'>{gen.name}</span>
                                    ))}
                                </div>

                            </div>
                        </div>
                    </> : <></>}
                </div>
            </div>
            <Trial />
        </>
    );
}

export default InMovies;
