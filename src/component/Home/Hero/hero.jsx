import React from 'react';
import "./hero.css"
import icon from "./icon.svg"
const Hero = ({ data }) => {
    return (
      <>
        <div className='hero-bg'>
            {data.map((item) => (
                <img className='bg-img'
                    key={item.id}
                    src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}
                    alt={item.title}
                />
            ))}
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
            <button><i class="fa-solid fa-caret-right"></i>Start Watching Now</button>


            </div>
        </div>
      </>
    );
};

export default Hero;
