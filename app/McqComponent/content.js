import Filter from "./filter";
import Container from "./container";

const Content = () => {
    return (
        <>
            <div className="content-box">
                <Filter />
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