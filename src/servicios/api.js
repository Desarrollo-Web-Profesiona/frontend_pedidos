import axios from "axios";

const API = axios.create({
  baseURL: "https://devoted-miracle-production-51f9.up.railway.app/api/v1"
});

export default API;