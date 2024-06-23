import axios from "axios";

const api = axios.create({
  baseURL: "https://...",
  headers: {
    "Content-Type": "application/json",
  },
});

// Function to get data for the discover section
export const getDiscoverData = async () => {
  try {
    const response = await api.get("/discover");
    return response.data;
  } catch (error) {
    console.error("Error fetching discover data:", error);
    throw error;
  }
};

// Function to get data for the recommended section
export const getRecommendedData = async () => {
  try {
    const response = await api.get("/recommended");
    return response.data;
  } catch (error) {
    console.error("Error fetching recommended data:", error);
    throw error;
  }
};

// Function to get data for the reviews section
export const getReviewsData = async () => {
  try {
    const response = await api.get("/reviews");
    return response.data;
  } catch (error) {
    console.error("Error fetching reviews data:", error);
    throw error;
  }
};

export default api;
