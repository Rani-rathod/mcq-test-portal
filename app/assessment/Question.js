
// import './question.css';

// const Question = () => {
//     return (
//         <>
//             <div className="question-num">
//                 <div className="question-title">Question 1</div>
//                 <div className="score-num">Score +1</div>
//             </div>
//             <div className="question-content">
//                 <div className="question">
//                     Which of the following committees recommended inclusion of fundamental duties ?
//                 </div>
//                 <div className="options">
//                     <label className="question-box">
//                         <input type="radio" name="committee" value="Tarapore Committee" className="circle" />
//                         <span className="option">Tarapore Committee</span>
//                     </label>
//                     <label className="question-box">
//                         <input type="radio" name="committee" value="Radha Krishnan Committee" className="circle" />
//                         <span className="option">Radha Krishnan Committee</span>
//                     </label>
//                     <label className="question-box">
//                         <input type="radio" name="committee" value="Swaran Singh Committee" className="circle" />
//                         <span className="option">Swaran Singh Committee</span>
//                     </label>
//                     <label className="question-box">
//                         <input type="radio" name="committee" value="Balwantrai Mehta Committee" className="circle" />
//                         <span className="option">Balwantrai Mehta Committee</span>
//                     </label>
//                 </div>
//             </div>

//         </>
//     )
// }
// export default Question;



"use client";
import { useEffect, useState } from "react";
import "./question.css"

const Question=()=>{

    const [data,setData] = useState([]);

    useEffect(() => {
        fetch(`https://the-trivia-api.com/v2/questions`)
            .then(response => response.json())
            .then((data) => {
                console.log(data);
                setData(data);
            });
    }, []);

    return(
        <>
        <div className="question-border">
                {data.map((item) => (
                <div key={item.id}>
                    <h2>question:-{item.question.text}</h2> 
                    <br></br>
                    <h3>correctAnswer:-{item.correctAnswer}</h3>
                    <br></br>
                    <h3>incorrectAnswers:-{item.incorrectAnswers}</h3>
                </div>
            ))}
        </div>
        </>
    )
}
export default Question;



