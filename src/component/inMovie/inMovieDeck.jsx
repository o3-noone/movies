import React from 'react'

const InMovieDeck = ({selectWidth, item, width}) => {
  return (
    <div className="inMovie-desc" style={{
        minWidth: width >= 1390 ? 'auto' : `${selectWidth * 90}px`
    }}>
        <h4>Description</h4>
        <p>{item.overview}</p>
    </div>
  )
}

export default InMovieDeck