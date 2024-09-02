import React from 'react';


function Pagination() {
  return (
    <>
      <div className='desktop-view'>
        <div className="pagination">
          <img src="/arrow1.png" alt="Logo" className="arrow" />
          <div className='pagin-1'>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
          <div>6</div>
          <div>7</div>
          <div>8</div>
          <img src="/arrow2.png" alt="Logo" className="arrow" />
        </div>
      </div>

      <div className='mobile-view'>
        <div className="pagination">
          <img src="/arrow3.svg" alt="Logo" className="arrow" />
          <div className='pageno'>1</div>
          <div className='dots'>...</div>
          <div>5</div>
          <div className='dots'>...</div>
          <div>8</div>
          <img src="/arrow2.png" alt="Logo" className="arrow" />
        </div>
      </div>
    </>
  )
}

export default Pagination;

