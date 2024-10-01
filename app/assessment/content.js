import Filter from "./filter";
import Question from "./Question";
import Timers from "./Timer";
import "./content.css";

const Content = () => {
    return (
        <>
            <div className="content-box">
                <div className="main">
                    <div className="timer-filter">
                <Timers/>
                <Filter />
                </div>
                <div className="questions">
                    <Question />
                    <Question />
                    <Question />
                    <Question />
                    <Question />
                </div>
            </div>
            </div>
        </>

    )
}
export default Content;