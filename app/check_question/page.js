
import React from 'react';
import  Header from "../component/Header";
import Questions_score from "./Questions_score";
import Questions_list from './Questions_list';
function page() {
  return (
    <>
    <Header/>  
    <div className="questions-siderbar">
        <Questions_score/>
        <Questions_list/>
    </div>                
</>
  )
}

export default page;

