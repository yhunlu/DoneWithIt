import client from "./client";

const login = (email, password) => client.post("/auth", { email, password });
const refreshToken = (token) => client.post("/auth/refresh", { token });

export default { login, refreshToken };
