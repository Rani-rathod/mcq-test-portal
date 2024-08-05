import React from 'react';
import Header from './component/Header';
import Main from './component/Main';
import Footer from './component/Footer';

function page() {
  return (
    <div className='main-container'>
      <Header/>
      <Main/>
      <Footer/>
    </div>
  )
}

export default page;