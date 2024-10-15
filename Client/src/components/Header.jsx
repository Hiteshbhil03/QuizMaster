import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Header() {
    const navigate = useNavigate();
    const isLoggedIn = !!localStorage.getItem('token');

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('userId');
        navigate('/login');
    };

    return (
        <header className="bg-gray-100 shadow-md">
            <nav className="max-w-6xl mx-auto p-4 flex justify-between items-center">
                <h1 className="text-2xl font-bold text-teal-600">
                    Quiz Application
                </h1>
                <ul className="flex space-x-8 items-center ">
                    <li>
                        <Link to="/" className="text-gray-700 hover:text-teal-600 transition duration-300">Home</Link>
                    </li>
                    {isLoggedIn ? (
                        <>
                            <li>
                                <Link to="/topics" className="text-gray-700 hover:text-teal-600 transition duration-300">Take Quiz</Link>
                            </li>
                            <li>
                                <Link to="/leaderboard" className="text-gray-700 hover:text-teal-600 transition duration-300">Leaderboard</Link>
                            </li>
                            <li>
                                <button
                                    onClick={handleLogout}
                                    className="bg-teal-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 hover:bg-teal-500"
                                >
                                    Logout
                                </button>
                            </li>
                        </>
                    ) : (
                        <>
                            <li>
                                <Link to="/login" className="text-gray-700 hover:text-teal-600 transition duration-300 ">Login</Link>
                            </li>
                            <li>
                                <Link to="/register" className="text-gray-700 hover:text-teal-600 transition duration-300">Register</Link>
                            </li>
                        </>
                    )}
                </ul>
            </nav>
            <hr className="border-gray-300 mx-8" />
        </header>
    );
}

export default Header;
