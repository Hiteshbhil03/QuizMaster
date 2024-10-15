import api from './api';

const AuthService = {
    async login(email, password) {
        const response = await api.post('/users/login', { email, password });
        if (response.data.token) {
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('userId', response.data._id);
            // console.log('Token set in localStorage:', response.data.token); // Add this log
        }
        return response.data;
    },

    async register(name, email, password) {
        const response = await api.post('/users/register', { name, email, password });
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
