
'use client';
import { useEffect, useState } from "react";

function Data() {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('https://the-trivia-api.com/v2/questions')
            .then(response => response.json())
            .then(fetchedData => {
                // setData(fetchedData);
                console.log(fetchedData)
            })
    });
    return (
        <div>
            <h1>Questions Data</h1>
            {data.map(item => (
                <div key={item.id}>
                   <h4>Question: {item.question.text}</h4>
                    <h2>Category: {item.category}</h2>
                    <h3>ID: {item.id}</h3>
                </div>
            ))}
        </div>
    );
}
export default Data;




// "use client";
// import { useEffect, useState } from "react";
// import "./question.css";

// const Question = () => {
//     const [data, setData] = useState([]);
//     const [currentQuestion, setCurrentQuestion] = useState(0);

//     useEffect(() => {
//         fetch(`https://the-trivia-api.com/v2/questions?limit=5`)
//             .then(response => response.json())
//             .then((data) => {
//                 console.log(data);
//                 setData(data);
//             });
//     }, []);
//     const handleNextQuestion = () => {
//         setCurrentQuestion(prev => prev + 1);
//     };

//     return (
//         <>
//             {data.length > 0 && (
//                 <div className="question-num">
//                     <div className="question-title">Question {currentQuestion + 1}</div>
//                     <div className="score-num">Score: +1</div>
//                 </div>
//             )}

//             {data.length > 0 && (
//                 <div className="question-content">
//                     <div className="question">
//                         {data[currentQuestion].question.text}
//                     </div>

//                     <div className="options">
//                         {data[currentQuestion].incorrectAnswers.concat(data[currentQuestion].correctAnswer)
//                             .sort(() => Math.random() - 0.5)
//                             .map((option, index) => (
//                                 <label key={index} className="question-box">
//                                     <input
//                                         type="radio"
//                                         name={`question-${currentQuestion}`}
//                                         value={option}
//                                         className="circle"
//                                     />
//                                     <span className="option">{option}</span>
//                                 </label>
//                             ))}
//                     </div>
//                 </div>
//             )}
//         </>
//     );
// };

// export default Question;
