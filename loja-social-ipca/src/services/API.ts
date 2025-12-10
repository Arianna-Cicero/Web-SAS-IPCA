import axios from "axios";

export const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || "http://localhost:8080",
  timeout: Number(process.env.REACT_APP_API_TIMEOUT) || 5000,
});

// Request interceptor - add auth token if available
api.interceptors.request.use(
  (config) => {
    // Add Authorization header if token exists in localStorage
    const token = localStorage.getItem("authToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    console.error("Request error:", error);
    return Promise.reject(error);
  }
);

// Response interceptor - handle errors and validate status codes
api.interceptors.response.use(
  (response) => {
    // Only return successful responses
    if (response.status >= 200 && response.status < 300) {
      return response;
    }
    return Promise.reject(response);
  },
  (error) => {
    // Handle specific error cases
    if (error.response) {
      // Server responded with error status
      const status = error.response.status;
      if (status === 401) {
        // Unauthorized - clear token and redirect to login
        localStorage.removeItem("authToken");
        window.location.href = "/";
      } else if (status === 403) {
        console.error("Access forbidden");
      } else if (status === 404) {
        console.error("Resource not found");
      } else if (status >= 500) {
        console.error("Server error:", status);
      }
    } else if (error.request) {
      // Request made but no response received
      console.error("No response from server:", error.request);
    } else {
      // Error in request setup
      console.error("Request error:", error.message);
    }
    return Promise.reject(error);
  }
);
