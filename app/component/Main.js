
function Main() {
	return (
		<>
			<div className="main-page">
				<div className='mcq-div'>MCQ Test Portal</div>
				<div className="instructions">
					<div className='info1'><b>Instructions</b></div>
					<div className='info2'>Please read the instructions carefully before you begin:</div>
					<div className='ul-div'><ul>
						<li>Timing: The test is timed. You have [specified time] minutes to complete all questions.</li>
						<li>Questions: The test comprises [number of questions] multiple-choice questions (MCQs).</li>
						<li>Navigation: You can navigate between questions using the 'Next' and 'Previous' buttons.</li>
						<li>Selection: Choose the best answer for each question. You can change your answers anytime before submitting.</li>
						<li>Submission: Once you have answered all questions, click the 'Submit' button. You must submit before the timer runs out.</li>
						<li>Review: After submission, you may review your answers and scores.</li>
					</ul></div>
					<div className='info3'>Please ensure a stable internet connection. If you encounter any issues, contact support immediately.</div>
					<div className='info4'>Click 'Let's Start' to begin the test.
						<br></br><b>Good luck!</b>
					</div>
					<div className='line'></div>
					<a className='' href='/McqComponent'>
						<button className="start-button">Let's Start!</button>
					</a>		
				</div>
		
			</div>
		</>
	)
}
export default Main;





