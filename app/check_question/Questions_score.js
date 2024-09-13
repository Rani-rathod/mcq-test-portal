import React from 'react';
import './Questions_score.css';

function Questions_score() {
    return (
        <div className="question-score-main">
            <div className="questions-score">
                <div className="score-column">
                    <div className="score-count">35/40</div>
                    <div className="score-text">Your Scored</div>
                </div>
                <div className="questions-detail">
                    <div className="questions-unattempted">
                        <div className="unattempted-logo">
                            <span className="unattempted-icon">!</span>
                        </div>
                        <div className="unattempted-text">
                            <span className="text1">Unattempted:  </span>
                            <span className="count">3</span>
                        </div>
                    </div>
                    <div className="score-line desktop-only"></div>
                    <div className="question-correct">
                        <div className="correct-logo">
                            <img src="Tick.png" className="correct-image" />
                        </div>
                        <div className="correct-text">
                            <span className="text">Correct:</span>
                            <span className="count">35</span>
                        </div>
                    </div>
                    <div className="score-line desktop-only"></div>
                    <div className="question-wrong">
                        <div className="wrong-logo">
                            <div className="wrong-icon">&#10005;</div>
                        </div>
                        <div className="wrong-text">
                            <span className="text">Wrong:</span>
                            <span className="count">2</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="question-headline">Check Your Answers</div>
            <div className="question-line"></div>
        </div>
    )
}
export default Questions_score;
