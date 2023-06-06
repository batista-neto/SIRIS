import React from "react";
import './func.css'
import {BiCaretRight, BiSquare} from 'react-icons/bi'
import { AuthProvider, useAuth } from '../../Auth/context'

export const Funcionario = () => {
    const login = useAuth();

    const logout = () => login.logout();

    return (
        <div>
            <div id="pagefunc" className="boxfunc">
                <button type="submit" class='botao'>
                <span><BiCaretRight/> GRÁFICO 1</span></button>
                
                <button type="submit" class='botaoStop'>
                <span><BiSquare/> PARAR 1</span></button>
                
                <button type="submit" class='botao'>
                <span><BiCaretRight/> GRÁFICO 2</span></button>
                
                <button type="submit" class='botaoStop'>
                <span><BiSquare/> PARAR 2</span></button>
                
                <button id='help' type="submit" class='botao'>HELP</button>
                
                <button id='logoutfunc' type="submit" onClick={logout}>SAIR</button>
            </div>
            <div>

                <div className="boxGrafico">
                <span>GRÁFICO 1</span></div>

                <div className="boxGrafico2">
                <span>GRÁFICO 2</span></div>

                <div id='cronometro' ></div>
            </div>
        </div>
    )
};