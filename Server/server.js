const express = require('express');
const app = express();
require('dotenv').config();
const connectDB = require('./config/db');
connectDB();

const cors = require('cors');

app.use(express.json());
app.use(cors());

// Add this line:
app.use('/api/leaderboard', require('./routes/leaderboardRoutes'));

app.get('/', (req, res) => {
    res.send('API is running');
});


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
