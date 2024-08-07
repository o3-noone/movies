import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './inMovies.css';
import ScrolTop from '../scrolTop/scrolTop';
import Trial from '../Home/tralFree/trial';
import Trailer from './trailer';
import InMovieDeck from './inMovieDeck';
import InMovieCast from './inMovieCast';
import InMovieMiniInfo from './inMovieMiniInfo';
import InMovieReviews from './inMovieReviews';
import InMovieInfo from './inMovieInfo';
import { Link } from 'react-router-dom';

const InMovies = ({ item, width, listItem }) => {
    const [add, setAdd] = useState(false);
    const [like, setLike] = useState(false);
    const [music, setMusic] = useState(false);
    const [actors, setActors] = useState([]);
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
        if (reviewNum > reviews.length - 1) {
            setReviewNum(1);
        } else if (reviewNum < 1) {
            setReviewNum(reviews.length - 1);
        }
    }, [reviewNum, reviews.length]);

    if (!item) {
        return <div>Loading...</div>;
    }

    const selectWidth = width / 100

    const formatTitle = (title) => {
        let formattedTitle = title.replace(/[^\w\s]/g, '-');
        formattedTitle = formattedTitle.replace(/-+/g, '-');
        formattedTitle = formattedTitle.replace(/\s+/g, '-');
        formattedTitle = formattedTitle.replace(/^-+|-+$/g, '');
        return formattedTitle.toLowerCase();
    };
    
    return (
        <>
            <div className="inMovie">
                <ScrolTop />
                <div className="InMovie-header">
                    <ul className="inMovie-headerList">
                        <li className="inMovie-headerItem">
                            <Link to={`/`}>
                                Home
                            </Link>
                        </li>/
                        <li className="inMovie-headerItem">
                            <Link to={`/movies/${formatTitle(listItem.name)}`}>
                               Genres: {listItem.name}
                            </Link>
                        </li>/
                        <li className="inMovie-headerItem">
                            <Link to={`/movies/${formatTitle(listItem.name)}/${formatTitle(item.title)}/${item.id}`}>
                              Film name:  {item.title}
                            </Link>
                        </li>
                    </ul>
                </div>
                <Trailer item={item} add={add} like={like} music={music} setAdd={setAdd} setLike={setLike} setMusic={setMusic} setShowTrailer={setShowTrailer} showTrailer={showTrailer} trailer={trailer} />
                <div className="inMovies-text">
                    <div className="inMovise-left">
                        <InMovieDeck item={item} width={width} selectWidth={selectWidth} />
                        <InMovieMiniInfo item={item} width={width} selectWidth={selectWidth} filterData={filterData} />
                        <InMovieCast actors={actors} width={width} />
                        <InMovieReviews selectWidth={selectWidth} setReviewNum={setReviewNum} reviewNum={reviewNum} reviews={reviews} width={width} />

                    </div>
                    <InMovieInfo item={item} width={width} filterData={filterData} />
                </div>
            </div>
            <Trial />
        </>
    );
}

export default InMovies;