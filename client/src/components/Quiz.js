import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/Quiz.css';

const Quiz = () => {
    const location = useLocation();
    const { username } = location.state || { username: '' };

    const [questions, setQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);

    useEffect(() => {
        const fetchQuestions = async () => {
            try {
                const response = await fetch('http://localhost:8080/api/questions');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                console.log(data); // Check the data
                setQuestions(data);
            } catch (error) {
                console.error('Error fetching questions:', error);
            }
        };

        fetchQuestions();
    }, []);

    const handleNextQuestion = () => {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedOption(null);
    };

    if (!username) {
        return <div>Please enter your username to start the quiz.</div>;
    }

    if (questions.length === 0) {
        return <div>Loading...</div>;
    }

    const currentQuestion = questions[currentQuestionIndex];

    return (
        <div className="quiz-container">
            <div className="quiz-header">
                <h1>Quiz Application</h1>
            </div>
            <div className="question-container">
                <h2>{currentQuestion.question}</h2>
                <ul>
                    {currentQuestion.options.map((option, index) => (
                        <li key={index}>
                            <input
                                type="radio"
                                id={`option${index}`}
                                name="option"
                                value={index}
                                checked={selectedOption === index}
                                onChange={() => setSelectedOption(index)}
                            />
                            <label htmlFor={`option${index}`}>{option}</label>
                        </li>
                    ))}
                </ul>
            </div>
            <button onClick={handleNextQuestion}>Next</button>
        </div>
    );
};

export default Quiz;
