import React from 'react';
import Filter from './Filter';
import QuestionCard from './QuestionCard';

function McqQue() {
    return (
        <>
            <div className='container-main'>
                <div className='secont-container-main'>
                    <Filter />
                    <QuestionCard />
                    <QuestionCard />
                    <QuestionCard />
                    <QuestionCard />
                    <QuestionCard />
                </div>
            </div>
        </>
    );
}
export default McqQue;

