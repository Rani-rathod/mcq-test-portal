import Filter from "./filter";
import Question from "./Question";
// import Timers from "./Timer";

const Content = () => {
    return (
        <>
            <div className="content-box">
                <div className="main">
                {/* <Timers/> */}
                <Filter />
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