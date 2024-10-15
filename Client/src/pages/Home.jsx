import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-light-gray text-gray-800 px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-teal-600">
                Welcome to the Quiz Application
            </h1>
            <p className="text-lg md:text-xl mb-6 text-gray-600 text-center max-w-lg">
                Test your knowledge on various topics! Challenge yourself and see how much you know.
            </p>
            <Link to="/topics">
                <button className="bg-teal-600 hover:bg-teal-500 text-white font-semibold py-2 px-4 rounded transition duration-300">
                    Start Quiz
                </button>
            </Link>
        </div>
    );
}

export default Home;
