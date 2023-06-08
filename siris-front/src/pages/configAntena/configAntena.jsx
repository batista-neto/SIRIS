import React from "react";
import './configAntena.css'
import { AiOutlineClose } from 'react-icons/ai'
import { useState } from "react";
import axios from "axios";

export const ConfigAntena = ({isAntena, isOpen, setConfigAntena}) => {
    
    const [port, setPort] = useState("")
    const [bautrate, setBautrate] = useState("")
    const [bytesize, setBytesize] = useState("")
    const [parit, setParit] = useState("")
    const [stopbits, setStopbits] = useState("")

    // Postar dados da Antena
    const postConfigAntena = () => {
        if(isAntena === "antena1") {
            axios.post("http://localhost:4000/configantena/antena1", {
                port,
                bautrate,
                bytesize,
                parit,
                stopbits,
            })
        }

        else if (isAntena === "antena2") {
            axios.post("http://localhost:4000/configantena/antena2", {
                port,
                bautrate,
                bytesize,
                parit,
                stopbits,
            })
        }

        limparCampos();
        setConfigAntena(false);
        
    }

    // limpar campos
    const limparCampos = () => {
        setPort("");
        setBautrate("");
        setBytesize("");
        setParit("");
        setStopbits("");
    }

    if(isOpen)   
        return (
            <div id="background">
                <div id="pagecad" className="boxantena">
                    <h1>Configurações de Comunicação</h1>
                    <input
                    type="text"
                    className="form"
                    id="port"
                    placeholder="PORT"
                    value={port}
                    onChange={(e) => setPort(e.target.value)}
                    />
                    <input
                    type="number"
                    className="form"
                    id="bautrate"
                    placeholder="BAUTRATE"
                    value={bautrate}
                    onChange={(e) => setBautrate(e.target.value)}
                    />
                    <input
                    type="number"
                    className="form"
                    id="bytesize"
                    placeholder="BYTESIZE"
                    value={bytesize}
                    onChange={(e) => setBytesize(e.target.value)}
                    />
                    <input
                    type="number"
                    className="form"
                    id="parit"
                    placeholder="PARIT"
                    value={parit}
                    onChange={(e) => setParit(e.target.value)}
                    />
                    <input
                    type="number"
                    className="form"
                    id="stopbits"
                    placeholder="STOPBITS"
                    value={stopbits}
                    onChange={(e) => setStopbits(e.target.value)}
                    />
                    
                    <button type="submit" id="buttoncomecar" onClick={postConfigAntena}>
                    COMEÇAR 
                    </button>

                    <button type="submit" id="buttonfechar" onClick={setConfigAntena}>
                    <span><AiOutlineClose/></span>
                    </button>
                </div>
            </div>
        )
        
    return null
};