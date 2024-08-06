import React from 'react'
import "./genres.css"
const Genres = ({ item }) => {

    return (
        <div className='p4 genres-box'>

            <div className="genres">
                {item.name}
            </div>
        </div>
    )
}

export default Genres