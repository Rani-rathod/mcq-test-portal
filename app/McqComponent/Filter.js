import React from 'react';

function Filter() {
    return (
        <>
            <div className="filter-container">
                <div className='filter'>
                    <div className="filter-title">FILTERS</div>
                    <div className="filter-group">
                        <p className="filter-label">Question Score</p>
                        <div className="filter-buttons">
                            <div className="filter-button active">All</div>
                            <div className="filter-button">10</div>
                            <div className="filter-button">15</div>
                            <div className="filter-button">20</div>
                        </div>
                    </div>
                    <div className="filter-section">
                        <p className="filter-subtitle">Questions Attempted</p>
                        <div className="filter-btn-group">
                            <div className="filter-btn1">All(40)</div>
                            <div className="filter-btn2">Attempted (3)</div>
                            <div className="filter-btn3">Unattempted (37)</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Filter;
