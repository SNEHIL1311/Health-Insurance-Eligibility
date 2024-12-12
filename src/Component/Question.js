import React, { useState } from "react";
import questions from "../data/data";
import Result from "./Result";

const Question = () => {
    const [index, setIndex] = useState(0);
    const [response, setResponse] = useState({});
    const [selectedOption, setSelectedOption] = useState(null);
    const [sum, setSum] = useState(0); // State to keep track of the sum
    const [result, setResult] = useState(null);

    const next = () => {
        if (index < questions.length - 1) {
            setIndex((prevIndex) => prevIndex + 1);
            setSelectedOption(null);
        }
    };

    const submit = () => {
        console.log(sum)
        setResult(sum); // Pass the final sum as the result
    };

    const handleOptionClick = (option) => {
        const value = questions[index].values[questions[index].options.indexOf(option)];
        setResponse({ ...response, [questions[index].id]: option });
        setSum((prevSum) => prevSum + value); // Update the sum
        setSelectedOption(option);
    };
 
   

    
    

    return (
        <div className="main-container">
            <div className="image-container">
                <img
                    src="https://5.imimg.com/data5/SELLER/Default/2024/6/431123756/GV/GU/QB/68754708/health-insurance.jpg"
                    alt="Health Insurance"
                />
                <p>Your personalized health insurance information starts here.</p>
            </div>

            <div className="container">
                {result !== null ? (
                    <Result result={result} />
                ) : (
                    <>
                        <h2>Check Your Eligibility Here!</h2>
                        <hr />
                        <h2>
                            {index + 1}. {questions[index].question}
                        </h2>
                        <ul>
                            {questions[index].options.map((option, i) => (
                                <li
                                    key={i}
                                    onClick={() => handleOptionClick(option)}
                                    className={selectedOption === option ? "selected" : ""}
                                >
                                    {option}
                                </li>
                            ))}
                        </ul>
                        {index < questions.length - 1 ? (
                            <button onClick={next} disabled={!selectedOption}>
                                Next
                            </button>
                        ) : (
                            <button onClick={submit} disabled={!selectedOption}>
                                Submit
                            </button>
                        )}
                        <div className="index">
                            {index + 1} of {questions.length} Questions
                        </div>
                        <div className="sum">Current Total: {sum}</div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Question;
