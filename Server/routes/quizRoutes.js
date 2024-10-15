const express = require('express');
const router = express.Router();
const { getQuestions, submitQuiz } = require('../controllers/quizController');
const { protect } = require('../middlewares/authMiddleware');

router.get('/questions', protect, getQuestions);
router.post('/submit', protect, submitQuiz);

module.exports = router;