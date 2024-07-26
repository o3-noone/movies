import React, { useState } from 'react'
import "./sub.css"
const Sub = () => {
    const [sub, setSub] = useState(1)
    return (
        <div className='sub-container p4'>
            <div className="sub">
                <div className="sub-title">
                    <h4>Choose the plan that's right for you</h4>
                    <p>Join StreamVibe and select from our flexible subscription options tailored to suit your viewing preferences. Get ready for non-stop entertainment!</p>
                    <div className="sub-btns">
                        <button className={`sub-btn ${sub === 1 ? "sub-act" : ""}`} onClick={()=>{
                            setSub(1)
                        }}>Monthly</button>
                        <button className={`sub-btn ${sub === 2 ? "sub-act" : ""}`} onClick={()=>{
                            setSub(2)
                        }}>Yearly</button>
                    </div>
                </div>
                <ul className="sub-list">
                    <li className="sub-item">
                        <div className="sub-itemT">
                            <h4>Basic Plan</h4>
                            <p>Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles.</p>
                        </div>
                        <div className="sub-price">
                           {sub===1? <> <h4>$9.99</h4><span>/month</span></>: <> <h4>${9.99*12}</h4><span>/year</span></>}
                        </div>
                        <div className="btns-sub">
                            <div className="btn-sub">
                                Start Free Trial 
                            </div>
                            <div className="btn-sub">
                                Chose Plan
                            </div>
                        </div>
                    </li>
                    <li className="sub-item">
                        <div className="sub-itemT">
                            <h4>Standard Plan</h4>
                            <p>Access to a wider selection of movies and shows, including most new releases and exclusive content</p>
                        </div>
                        <div className="sub-price">
                        {sub===1? <> <h4>$12.99</h4><span>/month</span></>: <> <h4>${12.99*12}</h4><span>/year</span></>}
                        </div>
                        <div className="btns-sub">
                            <div className="btn-sub">
                                Start Free Trial 
                            </div>
                            <div className="btn-sub">
                                Chose Plan
                            </div>
                        </div>
                    </li>
                    <li className="sub-item">
                        <div className="sub-itemT">
                            <h4>Premium Plan</h4>
                            <p>Access to a widest selection of movies and shows, including all new releases and Offline Viewing</p>
                        </div>
                        <div className="sub-price">
                        {sub===1? <> <h4>$14.99</h4><span>/month</span></>: <> <h4>${14.99*12}</h4><span>/year</span></>}
                        </div>
                        <div className="btns-sub">
                            <div className="btn-sub">
                                Start Free Trial 
                            </div>
                            <div className="btn-sub">
                                Chose Plan
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Sub