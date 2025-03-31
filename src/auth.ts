import api from "./api";

// Login & Store Token
export const login = async (username: string, password: string) => {
    try {
        const response = await api.post("/auth/login", { username, password });
        localStorage.setItem("token", response.data.token);
        return response.data;
    } catch (error) {
        console.error("Login failed:", error);
        throw error;
    }
};

// Logout
export const logout = () => {
    localStorage.removeItem("token");
};

// Check if User is Logged In
export const isAuthenticated = (): boolean => {
    return !!localStorage.getItem("token");
};
