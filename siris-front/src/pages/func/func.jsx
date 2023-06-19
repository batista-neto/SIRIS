import React from "react";
import './func.css'
import {BiCaretRight, BiSquare} from 'react-icons/bi'
import { BsFillCircleFill} from 'react-icons/bs'
import { useAuth } from '../../Auth/context'
import { useState } from "react";
import { ConfigAntena } from "../configAntena/configAntena";
import Barchart, { Mensagem } from "./grafico";

export const Funcionario = () => { 
    //fazendo logout
    const login = useAuth();    
    const logout = () => login.logout();

    //abrindo config da Antena
    const [openConfigAntena, setOpenConfigAntena] = useState(false)
    const [isAntena, setIsAntena] = useState()

    //grafico
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
                    <span>GRÁFICO 1</span>
                    <Barchart />
                </div>

                <div className="boxGrafico2">
                    <Barchart />
                <span>GRÁFICO 2</span>
                
                </div>

                <div id='cronometro' ></div>
                
                <Mensagem />

            </div>
            <ConfigAntena isAntena={isAntena} isOpen={openConfigAntena} setConfigAntena={() => setOpenConfigAntena(!openConfigAntena)}/>
        </div>
    )
};