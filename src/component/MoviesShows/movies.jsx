import React, { useState, useEffect } from 'react';
import "./movies.css";
import MoviesItem from './moviesItem';
import ScrolTop from '../scrolTop/scrolTop';
import MoviesBox from './moviesBox/moviesBox';
import ShowsBox from './showsBox/showsBox';

const Movies = ({ data, width }) => {
  const [count, setCount] = useState(0);
  const [randomNumber, setRandomNumber] = useState(null);
  const [shows, setShows] = useState(false)
  useEffect(() => {
    document.title = 'Movies & TV Shows';
  }, []);
  useEffect(() => {
    const generateRandomNumber = () => {
      const number = Math.floor(Math.random() * (data.length - 10 + 1)) + 10;
      setRandomNumber(number);
    };

    generateRandomNumber();
  }, [data.length]);

  const selectData = randomNumber !== null ? data.slice(Math.max(randomNumber - 5, 0), randomNumber) : [];

  const handlePrev = () => {
    setCount(prev => (prev - 1 + selectData.length) % selectData.length);
  };

  const handleNext = () => {
    setCount(prev => (prev + 1) % selectData.length);
  };

  return (
    <div className='movies-container p4'>
      <ScrolTop />
      <div className="movies-hero">
        <div className="movies-list">
          {selectData.length >= 1 ? selectData.map((item) => (
            <MoviesItem key={item.id} width={width} item={item} count={count} />
          )) : (
            <div className="load">
              <div className="wrapper">
                <div className="cir"></div>
                <div className="line-4"></div>
              </div>
            </div>
          )}
        </div>
        {width <= 790 ? <></> : <div className="movie-inc-dec">
          <div className="movie-inc" onClick={handlePrev}>
            <i className="fa-solid fa-arrow-left"></i>
          </div>
          <div className="movie-dots">
            {selectData.map((_, index) => (
              <span
                key={index}
                className={`movie-dot ${count === index ? "movie-dot-act" : ""}`}
                onClick={() => setCount(index)}
              ></span>
            ))}
          </div>
          <div className="movie-inc" onClick={handleNext}>
            <i className='fa-solid fa-arrow-right'></i>
          </div>
        </div>}
      </div>
      {width <= 790 ? (
  <>
    <div className="moviesShows">
      <button 
        className={`movies ${!shows ? "moviesAct" : ""}`} 
        onClick={() => setShows(false)}
      >
        Movies
      </button>
      <button 
        className={`movies ${shows ? "moviesAct" : ""}`} 
        onClick={() => setShows(true)}
      >
        Shows
      </button>
    </div>
  </>
) : (
  <></>
)}

      {width <= 790 && (
        <>
          {!shows ? (
            <MoviesBox width={width} baza={data} />
          ) : (
            <ShowsBox width={width} baza={data} />
          )}
        </>
      )}


      {width <= 790 ? <></> : <>

        <MoviesBox width={width} baza={data} />
        <ShowsBox width={width} baza={data} />
      </>}

    </div>
  );
}

export default Movies;
