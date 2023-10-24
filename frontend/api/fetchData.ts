import axios, { AxiosResponse } from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/",
  // baseURL: "http://192.168.1.114:8081/",
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
