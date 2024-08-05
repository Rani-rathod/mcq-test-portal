import react from 'react';

function Main() {
	return (
		<>
			<div className="main-page">
				<div className='mcq-div'>MCQ Test Portal</div>
				<div className="instructions">
					<div className='info'>
					<h2>Instructions</h2>
					<p>Please read the instructions carefully before you begin:</p>
					<ul>
						<li>Timing: The test is timed. You have [specified time] minutes to complete all questions.</li>
						<li>Questions: The test comprises [number of questions] multiple-choice questions (MCQs).</li>
						<li>Navigation: You can navigate between questions using the 'Next' and 'Previous' buttons.</li>
						<li>Selection: Choose the best answer for each question. You can change your answers anytime before submitting.</li>
						<li>Submission: Once you have answered all questions, click the 'Submit' button. You must submit before the timer runs out.</li>
						<li>Review: After submission, you may review your answers and scores.</li>
					</ul>
					<p>Please ensure a stable internet connection. If you encounter any issues, contact support immediately.</p>
					<div>Click 'Let's Start' to begin the test.</div>
					<div><b>Good luck!</b></div>
					</div>
					<div className='line'></div>
					<button className="start-button">Let's Start!</button>
				</div>
		
			</div>
		</>
	)
}
export default Main;

