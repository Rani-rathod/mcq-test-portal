
import Pagination from './Pagination';
import './header.css';
function Headerpage() {
    return (
        <>
            <div className="header-row ">
                <div className='header-box '>
                    <div className='logo-pagination'>
                        <div className='logo-box'>
                            <img className="logo" src="Logo.png" alt="Logo" />
                            <span className="header-title">QA</span>
                        </div>
                        <div className='model-line'></div>
                        <div className='Pagination-box'>
                            <Pagination />
                        </div>
                    </div>
                    <div className="submit-button-content">
                        <a href="/SubmitComponent" className='submit-button'>Submit</a>
                    </div>
                </div>


            </div>
        </>
    );
}
export default Headerpage;