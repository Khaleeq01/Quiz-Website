// src/components/Main.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Main.css';

const Main = () => {
    const [username, setUsername] = useState('');
    const navigate = useNavigate();

    const handleStartQuiz = () => {
        if (username.trim() !== '') {
            navigate('/quiz', { state: { username } });
        }
    };

    return (
        <div className="main-container">
            <div className="quiz-header">
                <h1>Quiz Application</h1>
            </div>
            <div className="quiz-instructions">
                <ol>
                    <li>You will be asked 10 questions one after another.</li>
                    <li>10 points is awarded for the correct answer.</li>
                    <li>Each question has three options. You can choose only one option.</li>
                    <li>You can review and change answers before the quiz finish.</li>
                    <li>The result will be declared at the end of the quiz.</li>
                </ol>
            </div>
            <div className="input-section">
                <input
                    type="text"
                    placeholder="Username*"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <button onClick={handleStartQuiz}>Start Quiz</button>
            </div>
        </div>
    );
};

export default Main;
