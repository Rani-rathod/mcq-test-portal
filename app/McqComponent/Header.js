import React from 'react';
import Pagination from './Pagination';
import Timer from './Timer';


function Header() {
    return (
        <div className='header-container'>
            <div className="header">
                <div className="header-left">
                    <img src="/Logo.png" alt="Logo" className="header-logo" />
                    <span className="header-title">QA</span>
                </div>
                <Timer/>
                <Pagination />
                <a className='' href='/SubmitComponent'>
                    <button className="submit-button">Submit</button>
                </a>
            </div>
        </div>    
    );
}

export default Header;
