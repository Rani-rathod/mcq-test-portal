
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
