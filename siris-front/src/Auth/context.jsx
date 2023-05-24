import { createContext, useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "./useLocalStorage"
import { useApi } from "../hooks/useApi";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useLocalStorage("user", null);
    const navigate = useNavigate();
    const api = useApi();

    //chama essa funcao para autenticar o usuario
    const login = async (data) => {
        setUser(data);
        navigate("/profile");
      };
    
   //chama essa funcao para fazer o logout
    const logout = () => {
        setUser(null);
        navigate("/", { replace: true });
  };

    const value = useMemo(
        () => ({
            user,
            login,
            logout
        }),
        [user]
    );
    
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>

};

export const useAuth = () => {
    return useContext(AuthContext);
};