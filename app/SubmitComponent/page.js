import './SubmitComponent.css';
import Header from "../component/Header";

const  submit_buttonbar= function(){
    return(
        <>
            <Header/>
            <div className="submit-container">
                <div className="submit-content">
                    <div className="submit-logo">
                        <img src="Tick.png" className="correct-logo"/>
                    </div>
                    <div className="submit-intraction">
                        <div className="submit-massage">Successfully Sumbitted</div>
                        <div className="submit-massage1">
                            Thank you for completing the test! 
                        </div>
                        <div className="submit-massage2">
                                Review your results and keep practicing. 
                                Great job and keep up the hard work!
                        </div>
                    </div>
                    <div className="check-score-button">
                        {/* <a href="/"> */}
                            <button className="check-button"> Check Your Score</button>
                        {/* </a> */}
                    </div>
                </div>
            </div>
        </>
    );
};

export default submit_buttonbar;