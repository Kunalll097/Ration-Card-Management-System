import axios from 'axios';

const BASE_URL = 'http://localhost:8080/api'; // Define the base URL for your backend API

// Create an instance of axios with default settings
const API = axios.create({
    baseURL: BASE_URL, // Use the base URL
});

// User APIs
export const registerUser = (data) => API.post('/users/register', data);
export const loginUser = (data) => API.post('/users/login', data); // Assuming basic login for future extension

// Ration APIs
export const fetchRationByUser = (userId) => API.get(`/ration/user/${userId}`);

// Consumption History APIs
export const fetchConsumptionHistory = (userId) => API.get(`/history/${userId}`);

// Complaint APIs
export const fileComplaint = (data) => API.post('/complaints', data);
export const fetchComplaints = (userId) => API.get(`/complaints/user/${userId}`);

// System Reports
export const fetchSystemReports = async () => {
    try {
        const response = await API.get('/system-reports');
        return response.data; // Assuming the response contains system report data
    } catch (error) {
        console.error('Error fetching system reports:', error);
        throw new Error('Error fetching system reports');
    }
};

// FPS Stock
export const fetchFPSStock = async () => {
    try {
        const response = await API.get('/fps-stock');
        return response.data; // Assuming the response contains FPS stock data
    } catch (error) {
        console.error('Error fetching FPS stock:', error);
        throw new Error('Error fetching FPS stock');
    }
};

export const fetchRationAllocation = async (userId) => {
    try {
        const response = await API.get(`/ration-allocation/${userId}`);
        return response.data; // Assuming the response contains ration allocation data
    } catch (error) {
        console.error('Error fetching ration allocation:', error);
        throw error;
    }
};

export default API;
