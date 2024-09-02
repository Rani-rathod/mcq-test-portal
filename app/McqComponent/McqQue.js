import React from 'react';
import Filter from './Filter';
import QuestionCard from './QuestionCard';

function McqQue() {
    return (
        <>
            <div className='container-main'>
                <div className='secont-container-main'>
                    <Filter />
                    <div className='questioncard'>
                    <QuestionCard />
                    <QuestionCard />
                    <QuestionCard />
                    <QuestionCard />
                    <QuestionCard />
                    </div>
                </div>
            </div>
        </>
    );
}
export default McqQue;

