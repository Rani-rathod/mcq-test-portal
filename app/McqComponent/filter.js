const Filter = () => {
    return (
        <>
            <div className="desktop-view filter-content">
                <div className="filter">
                    <div className="filter-div">
                        <div className="filter-heading">filters</div>
                        <div className="filter-score">Question Score</div>
                        <div className="box">
                            <div className="filter-all">All</div>
                            <div className="filter-marks">10</div>
                            <div className="filter-marks">15</div>
                            <div className="filter-marks">20</div>
                        </div>
                        <div className="filter-subtitle">Questions Attempted</div>
                        <div className="total-ques">
                            <div className="attempt-all">All(40)</div>
                            <div className="attempt">Attempted(3)</div><br />
                            <div className="attempt">Unattempted(37)</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mobile-view">
                <div className="mob-filter">
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