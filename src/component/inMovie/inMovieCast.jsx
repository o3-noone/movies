import React, { useEffect, useRef, useState } from 'react';

const InMovieCast = ({ width, actors }) => {
    const [number, setNumber] = useState(1);
    const inMovieCastRef = useRef(null);
    const [divWidth, setDivWidth] = useState(0);

    useEffect(() => {
        if (inMovieCastRef.current) {
            setDivWidth(inMovieCastRef.current.offsetWidth);
        }
    }, [width, actors]);

    const ContWidth = width / 100;
    const selectWidth = (divWidth - 80) / 100;
    const reviewsWidth = selectWidth * 100;

    const sortCast = actors.filter((item) => item.profile_path != null);
    const getMinWidth = () => {
        if (sortCast.length < 9) {
            if (width >= 1377) return `${reviewsWidth / 5}px`;
            if (width <= 1376 && width >= 1000) return `${reviewsWidth / 4}px`;
            if (width <= 1000 && width >= 770) return `${reviewsWidth / 3}px`;
            if (width <= 770 && width >= 550) return `${reviewsWidth / 2}px`;
            return `${reviewsWidth / 2}px`;

        } else if (sortCast.length >= 8) {
            if (width >= 1377) return `${reviewsWidth / 9}px`;
            if (width <= 1376 && width >= 1000) return `${reviewsWidth / 7}px`;
            if (width <= 1000 && width >= 770) return `${reviewsWidth / 5}px`;
            if (width <= 770 && width >= 550) return `${reviewsWidth / 3}px`;
            return `${reviewsWidth / 2}px`;
        }
    };

    const getDataLength = () => {
        if (sortCast.length < 9) {
            if (width <= 1920 && width >= 1376) return 5;
            if (width <= 1376 && width >= 1000) return 4;
            if (width <= 1000 && width >= 770) return 3;
            if (width <= 770 && width >= 550) return 2;
            return 2;
        } else if (sortCast.length >= 9) {
            if (width <= 1920 && width >= 1376) return 9;
            if (width <= 1376 && width >= 1000) return 7;
            if (width <= 1000 && width >= 770) return 5;
            if (width <= 770 && width >= 550) return 3;
            return 2;
        }

    };

    useEffect(() => {
        if (number > sortCast.length - getDataLength()) {
            setNumber(1);
        } else if (number <=0) {
            setNumber(sortCast.length - getDataLength());
        }
    }, [number, sortCast, getDataLength]);

    return (
        <div className="inMovie-cast" ref={inMovieCastRef} style={{
            minWidth: width >= 1390 ? 'auto' : `${ContWidth * 90}px`
        }}>
            <div className="cast-top">
                <h4>Cast</h4>
                <div className="cast-btns">
                    <button onClick={() => { setNumber(number - 1) }}><i className="fa-solid fa-arrow-left"></i></button>
                    <button onClick={() => { setNumber(number + 1) }}><i className="fa-solid fa-arrow-right"></i></button>
                </div>
            </div>
            <div className="actors-list">
                {sortCast ? sortCast.map((actor, index) => (
                    <div key={`${actor.id}-${index}`} className="actor-item" style={{ transform: `translateX(-${(number - 1) * 100}%)`, minWidth: getMinWidth(), maxWidth: getMinWidth() }}>
                        <img
                            src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
                            alt={actor.name}
                            className="actor-image"
                        />
                    </div>
                )) : <>
                
                {[1].map((item, index)=>(
                         <div className="load" key={index+1} style={{minWidth: getMinWidth()}}>
                         <div className="wrapper">
                             <div className="cir"></div>
                        
                             <div className="line-4"></div>
                         </div>
                     </div>
                       ))}
                </>}
            </div>
        </div>
    );
}

export default InMovieCast;
