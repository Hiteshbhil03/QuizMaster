# Quiz Application

This is a Quiz Application built using the MERN (MongoDB, Express, React, Node.js) stack. The application allows users to take quizzes, view their scores, and see their statistics on a leaderboard.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- User authentication (login and registration)
- Quiz taking with multiple-choice questions
- Score tracking for each user
- Leaderboard displaying top users based on total scores
- User statistics, including total score, quizzes taken, average score, highest score, and lowest score

## Technologies Used

- **Frontend:**
  - React
  - Vite
  - Tailwind CSS
  - React Router

- **Backend:**
  - Node.js
  - Express
  - MongoDB
  - Mongoose
  - JSON Web Token (JWT) for authentication

## Installation

### Prerequisites

- Node.js
- MongoDB

### Clone the Repository

```bash
git clone https://github.com/yourusername/quiz-application.git
cd quiz-application
```

### Set Up the Server

1. Navigate to the Server directory:
   
```bash
cd Server
```

2. Install dependencies:

```bash
npm install
```

3. Create a .env file and set your MongoDB connection string:

```bash
MONGO_URI=mongodb://localhost:27017/quiz-app
JWT_SECRET=your_jwt_secret
```

4. Start the server:

```bash
node index.js
```

### Set Up the Client

1. Navigate to the Client directory:

```bash
cd Client
```

2. install dependencies:

```bash
npm install
```

3. Start the client:

```bash
npm start
```

### Project Structure

├── 📁Client
│   ├── 📁public
│   │   └── vite.svg
│   ├── 📁src
│   │   ├── 📁assets
│   │   │   └── react.svg
│   │   ├── 📁components
│   │   │   ├── Footer.jsx
│   │   │   ├── Header.jsx
│   │   │   ├── LeaderboardItem.jsx
│   │   │   ├── PrivateRoute.jsx
│   │   │   ├── QuizQuestion.jsx
│   │   ├── 📁pages
│   │   │   ├── Home.jsx
│   │   │   ├── Leaderboard.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Quiz.jsx
│   │   │   ├── Register.jsx
│   │   │   └── Results.jsx
│   │   ├── 📁services
│   │   │   ├── api.jsx
│   │   │   └── authService.jsx
│   │   ├── App.css
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── .gitignore
│   ├── eslint.config.js
│   ├── index.html
│   ├── package-lock.json
│   ├── package.json
│   ├── postcss.config.js
│   ├── README.md
│   ├── tailwind.config.js
│   └── vite.config.js
└── 📁Server
    ├── 📁config
    │   └── db.js
    ├── 📁controllers
    │   ├── leaderboardController.js
    │   ├── quizController.js
    │   ├── topicController.js
    │   └── userController.js
    ├── 📁data
    │   └── questions.json
    ├── 📁middlewares
    │   └── authMiddleware.js
    ├── 📁models
    │   ├── questionModel.js
    │   └── scoreModel.js
    ├── 📁routes
    │   ├── leaderboardRoutes.js
    │   ├── quizRoutes.js
    │   └── userRoutes.js
    ├── index.js
    └── package.json


### API Endpoints

User Authentication
  - POST /users/login - Log in a user
  - POST /users/register - Register a new user

Leaderboard
  - GET /leaderboard - Get the top users' scores
  - GET /leaderboard/user-stats - Get the authenticated user's stats

Quizzes
  - GET /quizzes - Get all quizzes
  - POST /quizzes/score - Submit a score for a quiz

Usage
  - Navigate to http://localhost:3000 in your browser to access the application.
  - Use the registration page to create a new account.
  - Log in to access the quizzes and view your scores on the leaderboard.

Contributing

  Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

License

  This project is licensed under the MIT License. See the LICENSE file for more details.
  
```bash
Feel free to modify any sections as needed or add more details about your application!
```




