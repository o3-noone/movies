import React from 'react'
import "./questions.css"
const Questions = () => {
    return (
        <div className='questions-container p4'>
            <div className="question-title">
                <h4>Frequently Asked Questions</h4>
                <p>Got questions? We've got answers! Check out our FAQ section to find answers to the most common questions about StreamVibe.</p>
                <button>Ask a Questions</button>
            </div>
            <ul className="question-list">
                <li className="question-item">
                    <div className="question-top">
                        <div className="question-icon">
                          01
                        </div>
                        <h4>What is StreamVibe? </h4>
                        <i className="fa-solid fa-plus"></i>
                    </div>
                    
                </li>
                <li className="question-item">
                    <div className="question-top">
                        <div className="question-icon">
                         05
                        </div>
                        <h4>How do I sign up for StreamVibe?</h4>
                        <i className="fa-solid fa-plus"></i>
                    </div>
                    
                </li>
                <li className="question-item">
                    <div className="question-top">
                        <div className="question-icon">
                         02
                        </div>
                        <h4>How much does StreamVibe cost? </h4>
                        <i className="fa-solid fa-plus"></i>
                    </div>
                </li>
                <li className="question-item">
                    <div className="question-top">
                        <div className="question-icon">
                         06
                        </div>
                        <h4>What is the StreamVibe free trial? </h4>
                        <i className="fa-solid fa-plus"></i>
                    </div>
                    
                </li>
               
             
                <li className="question-item">
                    <div className="question-top">
                        <div className="question-icon">
                         04
                        </div>
                        <h4>How can I watch StreamVibe? </h4>
                        <i className="fa-solid fa-plus"></i>
                    </div>
                </li>
              
            </ul>
        </div>
    )
}

export default Questions