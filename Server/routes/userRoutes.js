const express = require('express');
const router = express.Router();
const User = require('../models/userModel');

// Register route
router.post('/register', async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({ message: 'User already exists' });
        }
        const user = await User.create({ name, email, password });
        res.status(201).json({ _id: user._id, name: user.name, email: user.email });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Login route
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (user && user.password === password) {
        res.json({ _id: user._id, name: user.name, email: user.email });
    } else {
        res.status(401).json({ message: 'Invalid email or password' });
    }
});

module.exports = router;