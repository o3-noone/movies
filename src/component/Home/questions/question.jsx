import React, { useState } from 'react'

const Question = ({ item }) => {
    const [check, setCheck] = useState(false)
    return (
        <li className="question-item">
            <div className="question-top">
                <div className="question-icon">
                    0{item.id}
                </div>
                <h4>{item.a} </h4>
                <i className={`fa-solid ${check ? "fa-minus" : "fa-plus"}`} onClick={() => { setCheck(!check) }}></i>
            </div>
            {check ? <p>{item.b}</p> : <></>}
        </li>
    )
}

export default Question