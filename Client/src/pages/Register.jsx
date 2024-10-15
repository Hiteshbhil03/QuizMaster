import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthService from '../services/authService';

function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            await AuthService.register(name, email, password);
            navigate('/topics');
        } catch (err) {
            setError(err.response?.data?.message || 'An error occurred during registration');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow-md">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-gray-800">Register</h2>
                    <hr className="my-4 border-gray-300" />
                </div>
                {error && (
                    <p className="text-sm text-red-500 text-center mb-4">{error}</p>
                )}
                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div>
                        <label
                            htmlFor="name"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-teal-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-teal-500 transition duration-300"
                    >
                        Register
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Register;
