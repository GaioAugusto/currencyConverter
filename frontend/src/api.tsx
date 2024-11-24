import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

export const getExchangeRates = async () => {
  try {
    const response = await axios.get(`${API_URL}/api/exchange-rates`);
    return response.data;
  } catch (error) {
    console.error("Error fetching exchange rates:", error);
    throw error;
  }
};
