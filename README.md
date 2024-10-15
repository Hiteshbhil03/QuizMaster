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

