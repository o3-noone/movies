import React from 'react'
import "./questions.css"
import Question from './question'
const Questions = () => {
    const question = [
        {
            id: 1,
            a: "What is StreamVibe?",
            b: "StreamVibe is a streaming service that allows you to watch movies and shows on demand."
        },
        {
            id: 2,
            a: "How much does StreamVibe cost?",
            b: "StreamVibe is a streaming service that allows you to watch movies and shows on demand."
        },
        {
            id: 3,
            a: "What content is available on StreamVibe?",
            b: "StreamVibe is a streaming service that allows you to watch movies and shows on demand."
        },
        {
            id: 4,
            a: "How can I watch StreamVibe?",
            b: "StreamVibe is a streaming service that allows you to watch movies and shows on demand."
        },
        {
            id: 5,
            a: "How do I sign up for StreamVibe?",
            b: "StreamVibe is a streaming service that allows you to watch movies and shows on demand."
        },
        {
            id: 6,
            a: "What is the StreamVibe free trial?",
            b: "StreamVibe is a streaming service that allows you to watch movies and shows on demand."
        },
        {
            id: 7,
            a: "How do I contact StreamVibe customer support?",
            b: "StreamVibe is a streaming service that allows you to watch movies and shows on demand."
        },
        {
            id: 8,
            a: "methods",
            b: "StreamVibe is a streaming service that allows you to watch movies and shows on demand."
        },
    ]
    return (
        <div className='questions-container p4'>
            <div className="question-title">
                <h4>Frequently Asked Questions</h4>
                <p>Got questions? We've got answers! Check out our FAQ section to find answers to the most common questions about StreamVibe.</p>
                <button>Ask a Questions</button>
            </div>
            <div className="question-list">
                <ul className="question-left">
                    {question.slice(0, 4).map((item) => (
                        <Question item={item} key={item.id} />
                    ))}
                </ul>
                <ul className="question-right">
                {question.slice(4, 8).map((item) => (
                        <Question item={item} key={item.id} />
                    ))}
                </ul>

            </div>
        </div>
    )
}

export default Questions