import { create } from "apisauce";

const apiClient = create({
  baseURL: "http://192.168.1.9:5000/api",
});

export default apiClient;
