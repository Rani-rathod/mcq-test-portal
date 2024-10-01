import './pagination.css';
const Pagination = () => {
    return (
        <>
            <div className="pagination ">
                <img className="left" src="arrow1.png" alt="Logo" />
                <img src="arrow1.png" className='pageNo previous' />
                <div className="pageNo">1</div>
                <div className="pageNo dotespace">...</div>
                <div className="pageNo number">2</div>
                <div className="pageNo number">3</div>
                <div className="pageNo number">4</div>
                <div className="pageNo pointer">5</div>
                <div className="pageNo dotespace">...</div>
                <div className="pageNo number">6</div>
                <div className="pageNo number">7</div>
                <div className="pageNo">8</div>
                <img className="right" src="arrow2.png" alt="Logo" />
            </div>
        </>
    )
}
export default Pagination;