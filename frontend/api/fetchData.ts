import axios, { AxiosResponse } from "axios";

const api = axios.create({
  baseURL: "https://api.example.com",
});

export const fetchData = async (endpoint: string): Promise<any> => {
  try {
    const response: AxiosResponse = await api.get(endpoint);
    return response.data;
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};
