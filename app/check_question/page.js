
import React from 'react';
import  Header from "../component/Header";
import Questions_score from "./Questions_score";
import Data from '../assessment/Data';
function page() {
  return (
    <div>
      <Header/>
      <Questions_score/>
      <Data/>
    </div>
  )
}

export default page;
