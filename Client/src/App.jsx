import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import TopicSelection from './pages/TopicSelection';
import Quiz from './pages/Quiz';
import Results from './pages/Results';
import Leaderboard from './pages/Leaderboard';
import AuthService from './services/authService';

function PrivateRoute({ children }) {
  return AuthService.isAuthenticated() ? children : <Navigate to="/login" replace />;
}

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/topics" element={<PrivateRoute><TopicSelection /></PrivateRoute>} />
            <Route path="/quiz" element={<PrivateRoute><Quiz /></PrivateRoute>} />
            <Route path="/results" element={<PrivateRoute><Results /></PrivateRoute>} />
            <Route path="/leaderboard" element={<PrivateRoute><Leaderboard /></PrivateRoute>} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;