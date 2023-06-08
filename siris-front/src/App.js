import React from "react";
import {
    Login
} from "./pages/login/login"
import {
    Adm
} from "./pages/adm/adm"
import {
    Cadastro
} from "./pages/cadastro/cadastro"
import {
    Funcionario
} from "./pages/func/func"
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom"
import {
    ProtectedRoute, ProtectedRouteFunc
} from './Auth/ProtectedRoute';
import {
    AuthProvider
} from "./Auth/context";

import { ConfigAntena } from "./pages/configAntena/configAntena";

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
                        <ProtectedRouteFunc>
                            <Funcionario />
                           
                        </ProtectedRouteFunc>
                    }/>

                </Routes> 
            </AuthProvider > 
        </Router>
    );
}

export default App;