import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: process.env.TMDB_API,
    language: "en-US",
  },
});

export default api;
