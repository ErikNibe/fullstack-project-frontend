import axios from "axios";

export const api = axios.create({
  baseURL: "https://fullstack-project-gmcc.onrender.com/",
  timeout: 5000,
});
