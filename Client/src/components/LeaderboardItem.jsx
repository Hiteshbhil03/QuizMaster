import React, { useState, useEffect } from 'react';
import axios from 'axios';

const LeaderboardItem = () => {
    const [leaderboardData, setLeaderboardData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchLeaderboard = async () => {
            const token = localStorage.getItem('token'); // Retrieve token from local storage

            if (!token) {
                setError('You must be logged in to view the leaderboard.');
                setLoading(false);
                return;
            }

            try {
                const response = await axios.get(`${import.meta.env.VITE_API_URL}/leaderboard`, {
                    headers: {
                        Authorization: `Bearer ${token}`, // Include the token in the request headers
                    },
                });

                // Access the data array from the response
                if (response.data.success) {
                    setLeaderboardData(response.data.data); // Set the data to the state
                } else {
                    setError('Failed to load leaderboard');
                }
                setLoading(false);
            } catch (error) {
                console.error('Error fetching leaderboard:', error);
                setError('Failed to load leaderboard');
                setLoading(false);
            }
        };

        fetchLeaderboard();
    }, []);

    if (loading) return <p className="text-center text-lg">Loading...</p>;
    if (error) return <p className="text-center text-lg text-red-500">{error}</p>;

    // Check if leaderboardData is an array
    if (!Array.isArray(leaderboardData)) {
        return <p className="text-center text-lg">No leaderboard data available.</p>;
    }

    return (
        <div className="leaderboard-container max-w-5xl mx-auto p-6 bg-white rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold text-center mb-4 text-teal-600">Leaderboard</h1>
            <table className="min-w-full table-auto border-collapse">
                <thead className="bg-teal-500 text-white">
                    <tr>
                        <th className="px-4 py-2 border">Rank</th>
                        <th className="px-4 py-2 border">Username</th>
                        <th className="px-4 py-2 border">Total Score</th>
                        <th className="px-4 py-2 border">Quiz Count</th>
                        <th className="px-4 py-2 border">Average Score</th>
                    </tr>
                </thead>
                <tbody>
                    {leaderboardData.map((user, index) => (
                        <tr
                            key={`${user._id}-${index}`}
                            className={`text-center transition-colors duration-300 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                                } hover:bg-teal-100`}
                        >
                            <td className="px-4 py-2 border">{index + 1}</td>
                            <td className="px-4 py-2 border">{user.username}</td>
                            <td className="px-4 py-2 border">{user.totalScore}</td>
                            <td className="px-4 py-2 border">{user.quizCount}</td>
                            <td className="px-4 py-2 border">{user.averageScore.toFixed(2)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default LeaderboardItem;
