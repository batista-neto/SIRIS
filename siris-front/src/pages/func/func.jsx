import React from "react";
import './func.css'
export const Funcionario = () => {
    return (
        <div id="pagefunc" className="boxfunc">
            <button id='grafico1' type="submit">GRAFICO 1</button>
            <button id='stop1' type="submit">PARAR 1</button>
            <button id='grafico2' type="submit">GRAFICO 2</button>
            <button id='stop2' type="submit">PARAR 2</button>
            <button id='help' type="submit">HELP</button>
        </div>
    )
};