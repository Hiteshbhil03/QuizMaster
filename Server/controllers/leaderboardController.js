const User = require('../models/userModel');

// Get leaderboard - top 10 users based on total score
exports.getLeaderboard = async (req, res) => {
    try {
        const leaderboard = await User.find()
            .select('name score')
            .sort({ score: -1 })
            .limit(10);
        res.json(leaderboard);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get stats for a single user (personal stats)
exports.getUserStats = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('name score');
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
