import React from 'react';
import { useLocation, Link } from 'react-router-dom';

function Results() {
    const location = useLocation();
    const { score, totalQuestions } = location.state || {};

    if (!score || !totalQuestions) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="text-center bg-white p-8 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Error</h2>
                    <p className="text-gray-600 mb-4">No results data available. Please take a quiz first.</p>
                    <Link
                        to="/topics"
                        className="inline-block bg-teal-600 text-white py-2 px-4 rounded-lg transition duration-300 hover:bg-teal-500"
                    >
                        Take a Quiz
                    </Link>
                </div>
            </div>
        );
    }

    const percentage = ((score / totalQuestions) * 100).toFixed(2);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="max-w-lg w-full bg-white p-8 rounded-lg shadow-lg text-center">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Quiz Results</h2>
                <p className="text-gray-600 mb-4">Your Score: <span className="font-semibold">{score}</span> out of {totalQuestions}</p>
                <p className="text-gray-600 mb-4">Percentage: <span className="font-semibold">{percentage}%</span></p>

                <div className="result-message mb-6">
                    {percentage >= 80 ? (
                        <p className="text-teal-600 font-medium">Excellent job! You've mastered this topic!</p>
                    ) : percentage >= 60 ? (
                        <p className="text-yellow-500 font-medium">Good work! You're on the right track, but there's room for improvement.</p>
                    ) : (
                        <p className="text-red-500 font-medium">Keep practicing! You'll get better with more study.</p>
                    )}
                </div>

                <div className="next-actions space-x-4">
                    <Link
                        to="/topics"
                        className="inline-block bg-teal-600 text-white py-2 px-4 rounded-lg transition duration-300 hover:bg-teal-500"
                    >
                        Take Another Quiz
                    </Link>
                    <Link
                        to="/leaderboard"
                        className="inline-block bg-gray-200 text-gray-700 py-2 px-4 rounded-lg transition duration-300 hover:bg-gray-300"
                    >
                        View Leaderboard
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Results;
