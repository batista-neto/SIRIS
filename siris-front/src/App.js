import { Login } from "./pages/login"
import { Adm } from "./pages/adm"
import { Cadastro } from "./pages/cadastro"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { ProtectedRoute } from "./Auth/ProtectedRoute"

function App() {
    return (
        <Router> 
                <Routes>
                    <Route path="/login" element= { <Login/> } />

                    <Route 
                    path="/adm" 
                    element= {
                        <ProtectedRoute>
                            <Adm />
                        </ProtectedRoute>
                        }
                    />

                    <Route 
                    path="/cadastro" 
                    element= {
                        <ProtectedRoute>
                            <Cadastro />
                        </ProtectedRoute>
                        } 
                    />
                </Routes>
        </Router>
    );
}

export default App;