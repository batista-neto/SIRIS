import React from "react";
import { Login } from "./pages/login/login"
import { Adm } from "./pages/adm/adm"
import { Cadastro } from "./pages/cadastro/cadastro"
import { Funcionario } from "./pages/func/func"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { ProtectedRoute, ProtectedRouteFunc } from './Auth/ProtectedRoute';
import { AuthProvider } from "./Auth/context";
import Barchart from "./pages/func/grafico";


function App() {
    return ( 
        <Router >
            <AuthProvider >
                <Routes >
                    <Route path = "/"
                        element = {
                        <Login />
                    }/>

                    <Route path = "*"
                        element = {
                        <Login />
                        }/>

                    <Route path = "/adm"
                        element = {
                        <ProtectedRoute>
                            <Adm />
                        </ProtectedRoute>
                    }/>

                    <Route path = "/adm/cadastro"
                        element = {
                        <ProtectedRoute>
                            <Cadastro />
                        </ProtectedRoute>
                    }/> 
                    <Route path = "/func"
                        element = {
                        
                            <Funcionario />
                           
                        
                    }/>
                    <Route path = "/grafico"
                        element = {
                        
                            <Barchart />
                           
                        
                    }/>

                </Routes> 
            </AuthProvider > 
        </Router>
    );
}

export default App;