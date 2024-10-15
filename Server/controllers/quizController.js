const fs = require('fs');
const path = require('path');
const Score = require('../models/scoreModel');

// Function to read questions from JSON file
const readQuestionsFromFile = () => {
    const filePath = path.join(__dirname, '../data/questions.json'); // Adjusted path
    try {
        const data = fs.readFileSync(filePath, 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        console.error("Error reading questions from file:", error);
        return []; // Return an empty array if there's an error
    }
};


const getQuestions = (req, res) => {
    console.log("Request Query:", req.query); // Log the query parameters
    const { topics, limit } = req.query;

    // Ensure topics is defined and split correctly
    const topicsArray = topics ? topics.split(',') : [];

    // Read sample questions from JSON file
    const sampleQuestions = readQuestionsFromFile();

    // Filter questions based on topics and limit
    const filteredQuestions = sampleQuestions
        .filter(q => topicsArray.includes(q.topic))
        .slice(0, parseInt(limit) || sampleQuestions.length); // Default to all if limit is not provided

    // Remove correct answer before sending to client
    const questionsForClient = filteredQuestions.map(({ correctAnswer, ...rest }) => rest);

    res.json(questionsForClient);
};


const submitQuiz = async (req, res) => {
    const { userId, answers } = req.body;

    // Read sample questions from JSON file
    const sampleQuestions = readQuestionsFromFile();

    // Calculate score
    const score = answers.reduce((acc, answer) => {
        const question = sampleQuestions.find(q => q._id === answer.questionId);
        return acc + (question.correctAnswer === answer.selectedAnswer ? 1 : 0);
    }, 0);

    try {
        // Save the quiz result to the database
        const totalQuestions = answers.length;

        const newScore = new Score({
            user: userId,
            score: score,
            totalQuestions: totalQuestions
        });

        await newScore.save(); // Save the score to the database

        res.json({
            score,
            totalQuestions
        });
    } catch (error) {
        console.error('Error saving quiz response:', error);
        res.status(500).json({ message: 'Server error while saving quiz response' });
    }
};

module.exports = {
    getQuestions,
    submitQuiz
};
