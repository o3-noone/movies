import React from 'react'

const InMovieReviews = ({width, selectWidth, setReviewNum, reviewNum, reviews}) => {
    const reviewsWidth=((selectWidth * 90 )-80) / 2
    const getMinWidth = () => {
        if (width >= 1390) return ``; 
        if (width <= 1389 && width >= 920) return `${reviewsWidth}px`;
        if(width<=919 && width >=500) return `${reviewsWidth*2}px`;
        if(width<500) return `${reviewsWidth*2+60}px`;
        return '';
    };
  return (
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
                <div className="reviews-item" style={{ transform: `translateX(-${(reviewNum - 1) * 100}% )` ,  minWidth: getMinWidth()}} key={index}>
                    <div className="review-item" >
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
                <span className={`review-dot ${reviewNum === index+1 ? "review-act" : ""}`} onClick={() => { setReviewNum(index + 1) }} key={index}></span>
            ))}
            <button onClick={() => { setReviewNum(reviewNum + 1) }} className="review-btn">
                <i className="fa-solid fa-arrow-right"></i>
            </button>
        </div>
    </> : <p style={{ color: "white" }}> No Reviews</p>}
</div>

  )
}

export default InMovieReviews