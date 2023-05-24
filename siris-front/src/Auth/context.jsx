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
    const login = async (email, senha) => {
        const data = await api.login(email, senha);
        if(data.user && data.token) {
          setUser(data.user);
          navigate('/adm')
          return true;
        }
        return false;
    }

    const logout = async () => {
        await api.logout();
        setUser(null);
        navigate("/login", { replace: true });
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