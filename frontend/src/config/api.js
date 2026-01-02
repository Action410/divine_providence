// API Configuration
// This file centralizes the API base URL configuration

const getApiBaseUrl = () => {
  // Check if we're in production
  if (process.env.NODE_ENV === 'production') {
    // Use environment variable if set, otherwise use a default
    return process.env.REACT_APP_BASE_URL || window.location.origin.replace(/:\d+$/, ':5000');
  }
  
  // Development: use environment variable or default to localhost
  return process.env.REACT_APP_BASE_URL || 'http://localhost:5000';
};

export const API_BASE_URL = getApiBaseUrl();

// Helper function to create full API URL
export const createApiUrl = (endpoint) => {
  // Remove leading slash if present to avoid double slashes
  const cleanEndpoint = endpoint.startsWith('/') ? endpoint.slice(1) : endpoint;
  return `${API_BASE_URL}/${cleanEndpoint}`;
};

export default API_BASE_URL;

