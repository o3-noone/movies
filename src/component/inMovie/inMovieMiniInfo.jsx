import React from 'react'

const InMovieMiniInfo = ({width, selectWidth, item, filterData}) => {
  return (
    <>
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
    </>
  )
}

export default InMovieMiniInfo