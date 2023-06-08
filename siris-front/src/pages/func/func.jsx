import React from "react";
import './func.css'
import {BiCaretRight, BiSquare} from 'react-icons/bi'
import { AuthProvider, useAuth } from '../../Auth/context'
import { useState } from "react";
import { ConfigAntena } from "../configAntena/configAntena";
import { Cadastro } from "../cadastro/cadastro";

export const Funcionario = () => {
    // Fazendo logout
    const login = useAuth();    
    const logout = () => login.logout();

    // Abrindo config da Antena
    const [openConfigAntena, setOpenConfigAntena] = useState(false)
    const [isAntena, setIsAntena] = useState()

    return (
        <div>
            <div id="pagefunc" className="boxfunc">
                <button type="submit" class='botao' onClick={() => {
                    setIsAntena("antena1"); 
                    setOpenConfigAntena(true)}}>
                <span><BiCaretRight/> GRÁFICO 1</span></button>
                
                <button type="submit" class='botaoStop'>
                <span><BiSquare/> PARAR 1</span></button>
                
                <button type="submit" class='botao' onClick={() => {
                    setIsAntena("antena2"); 
                    setOpenConfigAntena(true)}}>
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
            <ConfigAntena isAntena={isAntena} isOpen={openConfigAntena} setConfigAntena={() => setOpenConfigAntena(!openConfigAntena)}/>
        </div>
    )
};