import { Login } from "./pages/login/login"
import { Adm } from "./pages/adm/adm"
import { Cadastro } from "./pages/cadastro/cadastro"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { ProtectedRoute } from './Auth/ProtectedRoute';

function App() {
    return (
        <Router> 
            <Routes>
                <Route path="/" element= { <Login/> } />
                    
                <Route path="*" element= { <Login/> } />
               
                <Route path="/adm" 
                element= { 
                <ProtectedRoute> 
                    { <Adm /> }
                </ProtectedRoute>
                } />
                
                <Route path="/adm/cadastro" 
                element= { 
                <ProtectedRoute> 
                    { <Cadastro /> }
                </ProtectedRoute>
                } />

            </Routes>
        </Router>
    );
}

export default App;