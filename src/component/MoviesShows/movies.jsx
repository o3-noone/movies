import React, { useState } from 'react';
import "./movies.css";
import MoviesItem from './moviesItem';
import ScrolTop from '../scrolTop/scrolTop';
import MoviesBox from './moviesBox/moviesBox';

const Movies = ({ data, width }) => {
  const [count, setCount] = useState(0);
  const selectData = data.slice(23, 27);
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
            <MoviesItem key={item.id} item={item} count={count} />
          )) : <>
            <div className="load">
              <div className="wrapper">
                <div className="cir"></div>
                <div className="line-4"></div>
              </div>
            </div>
          </>}
        </div>
        <div className="movie-inc-dec">
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
        </div>
      </div>
      <MoviesBox width={width} baza={data} />
    </div>
  );
}

export default Movies;
