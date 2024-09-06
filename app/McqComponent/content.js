import Filter from "./filter";
import Container from "./container";
import Timers from './Timer';

const Content = () => {
    return (
        <>
            <div className="content-box">
                <Filter />
                <Timers />
                <div className="questions">
                    <Container />
                    <Container />
                    <Container />
                    <Container />
                    <Container />
                </div>
            </div>

        </>

    )
}
export default Content;