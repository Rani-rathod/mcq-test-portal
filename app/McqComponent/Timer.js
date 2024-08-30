import React from 'react';
import './Timer.css';


const Timer = () => {
    return (
        <div className='timer-container'>
            <div className="timer">
                <div className='timer-inside'>
                    <div className='tim'>
                        <div className='timeint'>
                            <div className='hour time'>50</div>
                            <div className='sec time'>30</div>

                        </div>
                        <div className='timestr'>
                            <div className='minute min'>Min</div>
                            <div className='second min'>Sec</div>
                        </div>
                    </div>

                </div>
            </div>
            <div className='timer-text'>Remaining Time</div>
        </div>
    );
}
export default Timer;
