

const main=()=>{
    return(
        <>
            <div className="instraction">
                <div className="headline">MCQ Test Portal</div>
                <div className="instraction-container">
                    <div className="instraction-content">
                        <div className="context">Instructions</div>
                        <div className="instraction-text">Please read the instructions carefully before you begin:</div>
                        
                        <div className="test-instraction">
                                <ul className="test-url">
                                    <li>Timing: The test is timed. You have [specified time] minutes to complete all questions.</li>
                                    <li>Questions: The test comprises [number of questions] multiple-choice questions (MCQs).</li>
                                    <li>Navigation: You can navigate between questions using the 'Next' and 'Previous' buttons.</li>
                                    <li>Selection: Choose the best answer for each question. You can change your answers anytime before submitting.</li>
                                    <li>Submission: Once you have answered all questions, click the 'Submit' button. You must submit before the timer runs out.</li>
                                    <li>Review: After submission, you may review your answers and scores.</li>
                                </ul>
                        </div>
                        <div className="test-rule">
                            <span>Please ensure a stable internet connection. If you encounter any </span>issues, contact support immediately.
                        </div>
                        <div className="last-instraction">
                            <div>Click 'Lets Start' to begin the test.</div> 
                            <div><b>Good luck!</b></div>
                        </div> 
                        
                    </div>
                    <div className="instruction-line"></div>
                    <div className="start-button">
                        <a  href="/McqComponent">
                            <button className="click">Lets Start! </button>
                        </a>    
                    </div>   

                </div>

            </div>
        
        </>
    )

}
export default main



