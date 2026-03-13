import axios from "axios";

const API = axios.create({
  baseURL: "https://devoted-miracle-production-51f9.up.railway.app"
});

export default API;