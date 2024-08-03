import React from 'react'

const InMovieCast = ({width, selectWidth, setNumber, number, actors}) => {
    return (
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
    )
}

export default InMovieCast