import axios from "axios";

const api = axios.create({
  baseURL: "https://pudge-backender.org.kg",
  headers: {
    "Content-Type": "application/json",
  },
});

// Function to get data for the discover section
export const getDiscoverData = async (
  category_name = "",
  page = 1,
  limit = 12
) => {
  try {
    const response = await api.get("/tours-list/", {
      params: {
        category_name,
        page,
        limit,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching discover data:", error);
    throw error;
  }
};

// Function to get data for the recommended section
export const getRecommendedData = async (season = "") => {
  try {
    const response = await api.get("/recommend-tours/", {
      params: {
        season,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching recommended data:", error);
    throw error;
  }
};

// Function to get tour details by ID
export const getTourDetails = async (id) => {
  try {
    const response = await api.get(`/tour-detail/${id}/`);
    return response.data;
  } catch (error) {
    console.error("Error fetching tour details:", error);
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
