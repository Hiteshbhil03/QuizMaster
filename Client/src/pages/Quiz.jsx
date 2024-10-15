import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import QuizQuestion from '../components/QuizQuestion';
import api from '../services/api';

function Quiz() {
    const [questions, setQuestions] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState([]);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchQuestions = async () => {
            try {
                const selectedTopics = JSON.parse(localStorage.getItem('selectedTopics'));
                const response = await api.get('/quiz/questions', {
                    params: { topics: selectedTopics.join(','), limit: 10 }
                });
                setQuestions(response.data);
            } catch (err) {
                setError('Failed to fetch questions. Please try again.');
                console.error('Error fetching questions:', err);
            }
        };

        fetchQuestions();
    }, []);

    const handleAnswer = (answer) => {
        // Store selected answer
        setAnswers((prevAnswers) => [
            ...prevAnswers,
            { questionId: questions[currentQuestion]._id, selectedAnswer: answer }
        ]);

        // Move to the next question or submit the quiz
        if (currentQuestion + 1 < questions.length) {
            setCurrentQuestion((prev) => prev + 1);
        } else {
            submitQuiz();
        }
    };

    const submitQuiz = async () => {
        try {
            const userId = localStorage.getItem('userId');
            const response = await api.post('/quiz/submit', { userId, answers });
            navigate('/results', { state: { score: response.data.score, totalQuestions: response.data.totalQuestions } });
        } catch (err) {
            setError('Failed to submit quiz. Please try again.');
        }
    };

    if (error) return <div className="text-red-500 text-center">{error}</div>;
    if (questions.length === 0) return <div className="text-gray-700 text-center">Loading...</div>;

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl w-full bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                    Question {currentQuestion + 1} of {questions.length}
                </h2>
                <QuizQuestion
                    question={questions[currentQuestion]}
                    onAnswer={handleAnswer}
                    selectedAnswers={answers.map(ans => ans.selectedAnswer)} // Pass selected answers
                />
                <div className="mt-6">
                    <progress
                        className="w-full h-2 rounded bg-gray-200"
                        value={currentQuestion + 1}
                        max={questions.length}
                    ></progress>
                </div>
            </div>
        </div>
    );
}

export default Quiz;
