import Filter from "./filter";
import Container from "./container";

const Content = () => {
    return (
        <>
            <div className="content-box">
                <div className="main">
                <Filter />
                <div className="questions">
                    <Container />
                    <Container />
                    <Container />
                    <Container />
                    <Container />
                </div>
            </div>
            </div>
        </>

    )
}
export default Content;