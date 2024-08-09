import React, { useEffect, useState } from 'react';
import './hero.css';
import icon from './icon.svg';
import { useNavigate } from 'react-router-dom';
const Img = ({item}) =>{
  const img = `https://image.tmdb.org/t/p/w500${item.backdrop_path}`

  return (
    <>
    <img
              className='bg-img'
              src={img}
              alt={item.title}
            />
    </>
  )
}
const Hero = ({ data, setCount }) => {
  const [shuffledData, setShuffledData] = useState([]);
  const navigate = useNavigate()
  useEffect(() => {
    // Shuffle the data array
    const shuffleArray = (array) => {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    };

    if (data) {
      const shuffled = shuffleArray([...data]);
      setShuffledData(shuffled);
    }
  }, [data]);
  return (
    <>
      <div className='hero-bg'>
        {shuffledData.length > 0 ? (
          shuffledData.slice(0, 36).map((item, index) => (
           <Img key={index+1} item={item}/>
          ))
        ) : (
          <>Loading...</>
        )}
        <div className="hero">
          <div className="hero-img">
            <img src={icon} alt="icon" />
          </div>
        </div>
      </div>
      <div className="hero-text">
        <h3>The Best Streaming Experience</h3>
        <p>StreamVibe is the best streaming experience for watching your favorite movies and shows on demand, anytime, anywhere. With StreamVibe, you can enjoy a wide variety of content, including the latest blockbusters, classic movies, popular TV shows, and more. You can also create your own watchlists, so you can easily find the content you want to watch.</p>
        <div className="hero-btn">
          <button onClick={() => {
            setCount(2);
            localStorage.setItem("headerId", 2);
            navigate(`/movies`)
          }}><i className="fa-solid fa-caret-right"></i>Start Watching Now</button>
        </div>
      </div>
    </>
  );
};

export default Hero;
