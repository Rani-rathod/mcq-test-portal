
import './filter.css';
import Timers from './Timer';
const Filter = () => {
    return (
        <>
            <div className='timerfilter-container'>
                <Timers />
                <div className="filter-content desktop-view">
                    <div className="small-text">FILTERS</div>
                    <div className="inside-function">
                        <div className="score-items">
                            <div>Question Score</div>
                            <div className="fillter-values">
                                <div className="fillter-score">All</div>
                                <div className="fillter-score1">10</div>
                                <div className="fillter-score1">15</div>
                                <div className="fillter-score2">20</div>
                            </div>
                            <div className="">Questions Attempted</div>
                            <div className="question-count">
                                <div className="question-attempt">
                                    <div className="question-text">All (40)</div>
                                </div>
                                <div className="question-attempt1">
                                    <div className="question-text1">Attempted (3)</div>
                                </div>
                                <div className="question-unattempt">
                                    <div className="question-text2">Unattempted (37)</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mobile-view filter-mob">
                    <div className="filter-button">
                        <div className="filter-line">
                            <div className="line one"></div>
                            <div className="line two"></div>
                            <div className="line three"></div>
                        </div>
                        <div className="filter-text">filter</div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Filter;
