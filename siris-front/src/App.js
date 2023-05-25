import React from "react";
import { Login }  from "./pages/login/login"
import { Adm } from "./pages/adm/adm"
import { Cadastro } from "./pages/cadastro/cadastro"
import { Funcionario } from "./pages/func/func"
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
                 
                      <Adm />  
                
                } />
                
                <Route path="/adm/cadastro" 
                element= { 
                
                     <Cadastro /> 
                
                } />
                <Route path="/func" 
                element= { 
                
                     <Funcionario /> 
                
                } />

            </Routes>
        </Router>
    );
}

export default App;