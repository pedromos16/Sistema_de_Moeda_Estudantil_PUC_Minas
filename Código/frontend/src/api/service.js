import axios from "axios";

const api = axios.create({
  baseURL: "https://localhost:3001",
  withCredentials: true,
  headers: {
    "Content-type": "application/json",
    Accept: "application/json",
  },
});

export default api;
