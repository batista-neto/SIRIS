import React from "react";
import './func.css'
import {BiCaretRight, BiSquare} from 'react-icons/bi'
import { BsFillCircleFill} from 'react-icons/bs'
import { useAuth } from '../../Auth/context'
import { useState } from "react";
import { ConfigAntena } from "../configAntena/configAntena";
import { Grafico, Mensagem } from "./grafico";
import { Cronometro } from "./cronometro";

export const Funcionario = () => { 
    //fazendo logout
    const login = useAuth();    
    const logout = () => login.logout();

    //abrindo config da Antena
    const [openConfigAntena, setOpenConfigAntena] = useState(false)
    const [isAntena, setIsAntena] = useState()

    const [gerarGrafico1, setGerarGrafico1] = useState(false);
    const [gerarGrafico2, setGerarGrafico2] = useState(false);


    const pararGrafico1  = () => {setGerarGrafico1(false); paraCronometro()};
    const pararGrafico2  = () => {setGerarGrafico2(false); paraCronometro()};

    //rodando cronometro
    const [iniciarCronometro, setIniciarCronometro] = useState(false);
    const [pararCronometro, setPararCronometro] = useState(false);
    
    const paraCronometro = () => {
        setIniciarCronometro(false); 
        setPararCronometro(true);};

    return (
        <div className="paginaFuncionario">
            <div id="pagefunc" className="boxfunc">
                <button type="submit" class='botao' onClick={() => {
                    setIsAntena("antena1"); 
                    setOpenConfigAntena(true)}}>
                <span><BiCaretRight/> GRÁFICO 1</span></button>
                
                <button type="submit" class='botaoStop' onClick={pararGrafico1}>
                <span><BiSquare/> PARAR 1</span></button>
                
                <button type="submit" class='botao' onClick={() => {
                    setIsAntena("antena2"); 
                    setOpenConfigAntena(true)}}>
                <span><BiCaretRight/> GRÁFICO 2</span></button>
                
                <button type="submit" class='botaoStop' onClick={pararGrafico2}>
                <span><BiSquare/> PARAR 2</span></button>
                
                <button id='help' type="submit" class='botao'>HELP</button>
                
                <button id='logoutfunc' type="submit" onClick={logout}>SAIR</button>
            </div>
            <div>

                <div className="boxGrafico1">
                    <span>GRÁFICO 1</span>
                    <div className='grafico'>
                        {gerarGrafico1 && <Grafico />}
                    </div>                   
                </div>

                <div className="boxGrafico2">
                    {gerarGrafico2 && <Grafico />}
                <span>GRÁFICO 2</span>
                
                </div>

                <div id='boxcronometro' > <Cronometro iniciarCronometro={iniciarCronometro} pararCronometro={pararCronometro}/> </div>
                
                <Mensagem />

            </div>
            <ConfigAntena isAntena={isAntena} isOpen={openConfigAntena} setConfigAntena={() => setOpenConfigAntena(!openConfigAntena)}
            setGerarGrafico1={setGerarGrafico1} setGerarGrafico2={setGerarGrafico2} setIniciarCronometro={setIniciarCronometro} setPararCronometro={setPararCronometro}/>
        </div>
    )
};