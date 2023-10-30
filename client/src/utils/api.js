// Base URL for your backend API
const BASE_URL = 'http://localhost:5000/api';

// Fetch all available bongos
export const fetchBongos = async () => {
    try {
        const response = await fetch(`${BASE_URL}/bongos`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching bongos:", error);
        throw error;
    }
};

// Fetch a single bongo by its ID
export const fetchBongoById = async (id) => {
    try {
        const response = await fetch(`${BASE_URL}/bongos/${id}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(`Error fetching bongo with ID ${id}:`, error);
        throw error;
    }
};

// User login
export const loginUser = async (credentials) => {
    try {
        const response = await fetch(`${BASE_URL}/users/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(credentials),
        });

        const data = await response.json();
        if (!response.ok) {
            throw new Error(data.message || "Error logging in");
        }
        return data;
    } catch (error) {
        console.error("Error during login:", error);
        throw error;
    }
};

// User registration
export const registerUser = async (userInfo) => {
    try {
        const response = await fetch(`${BASE_URL}/users/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userInfo),
        });

        const data = await response.json();
        if (!response.ok) {
            throw new Error(data.message || "Error registering");
        }
        return data;
    } catch (error) {
        console.error("Error during registration:", error);
        throw error;
    }
};

// Future APi's go below here
