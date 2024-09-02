import React from 'react';

function QuestionCard() {
    return (
        <div className="question-container">
            <div className="question-header">
                <div className="question-title">QUESTION 1</div>
                <div className="question-score">Score +1</div>
            </div>
            <div className="question-content">
                <p className="question-text">Which of the following committees recommended inclusion of fundamental duties?</p>
                <div className="options">

                    <label className="option_1">
                        <input type="radio" name="question1" />
                        <span>Tarapore Committee</span>
                    </label>

                    <label className="option_2">
                        <input type="radio" name="question1" />
                        <span>Radha Krishnan Committee</span>
                    </label>

                    <label className="option_3">
                        <input type="radio" name="question1" />
                        <span>Swaran Singh Committee</span>
                    </label>

                    <label className="option_4">
                        <input type="radio" name="question1" />
                        <span>Balwantrai Mehta Committee</span>
                    </label>
                </div>
            </div>
        </div>
    )
}

export default QuestionCard;
