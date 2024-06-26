import axios from "axios";

// Configure the base URL and headers for the Axios instance
const api = axios.create({
  baseURL: "https://pudge-backender.org.kg",
  headers: {
    "Content-Type": "application/json",
  },
});

export const submitBooking = async (data) => {
  try {
    const response = await api.post("/booking-create/", data);
    return response.data;
  } catch (error) {
    console.error("Error submitting booking:", error);
    throw error;
  }
};

export default api;
