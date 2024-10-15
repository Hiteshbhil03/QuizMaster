const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const quizRoutes = require('./routes/quizRoutes');
const leaderboardRoutes = require('./routes/leaderboardRoutes');
const topicsRouter = require('./routes/topicsRouter');
const cors = require('cors');

dotenv.config();

const app = express();
connectDB().catch((err) => console.log(err));

app.use(cors({
   // origin: process.env.CORS_ORIGIN || 'http://localhost:5173'
   // origin: "https://quiz-app-full-stack-frontend.onrender.com"
   origin: "https://quiz-app-full-stack-frontend.vercel.app"
}));

app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/quiz', quizRoutes);
app.use('/api/leaderboard', leaderboardRoutes);
app.use('/api/topics', topicsRouter);
app.get('/', (req, res) => {
    res.send('API is running');
});


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
