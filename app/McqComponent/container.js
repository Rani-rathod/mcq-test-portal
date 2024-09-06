import './Container.css';

const Container = () => {
    return (
        <>
            <div className="question-num">
                <div className="question-title">Question 1</div>
                <div className="score-num">Score +1</div>
            </div>
            <div className="question-content">
                <div className="question">
                    Which of the following committees recommended inclusion of fundamental duties ?
                </div>
                <div className="options">
                    <label className="question-box">
                        <input type="radio" name="committee" value="Tarapore Committee" className="circle" />
                        <span className="option">Tarapore Committee</span>
                    </label>
                    <label className="question-box">
                        <input type="radio" name="committee" value="Radha Krishnan Committee" className="circle" />
                        <span className="option">Radha Krishnan Committee</span>
                    </label>
                    <label className="question-box">
                        <input type="radio" name="committee" value="Swaran Singh Committee" className="circle" />
                        <span className="option">Swaran Singh Committee</span>
                    </label>
                    <label className="question-box">
                        <input type="radio" name="committee" value="Balwantrai Mehta Committee" className="circle" />
                        <span className="option">Balwantrai Mehta Committee</span>
                    </label>
                </div>
            </div>

        </>
    )
}
export default Container;



