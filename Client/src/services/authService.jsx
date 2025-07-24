import api from './api';

// Use this for login:
const API_URL = 'http://localhost:5000/users/login';

const AuthService = {
    async login(email, password) {
        const response = await api.post(API_URL, { email, password });
        if (response.data.token) {
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('userId', response.data._id);
            // console.log('Token set in localStorage:', response.data.token); // Add this log
        }
        return response.data;
    },

    async register(name, email, password) {
        const response = await api.post('http://localhost:5000/users/register', { name, email, password });
        if (response.data.token) {
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('userId', response.data._id);
        }
        return response.data;
    },

    logout() {
        localStorage.removeItem('token');
        localStorage.removeItem('userId');
        localStorage.removeItem('user'); // Clear user data
    },

    getCurrentUser() {
        return JSON.parse(localStorage.getItem('user')); // Return user data
    },

    isAuthenticated() {
        return !!localStorage.getItem('token');
    }
};

export default AuthService;
