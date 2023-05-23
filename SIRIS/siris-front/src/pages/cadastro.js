import '../css/cadastro.css'

function cadastro() {
    return (
        <div id="adm" className="box">
            <h1>CADASTRAR</h1>
            <input id="usernamecad" placeHolder="NOME COMPLETO"></input>
            <input id="matriculacad" placeHolder="MATRÍCULA"></input>
            <input id="senhacad" placeHolder="SENHA (MÁXIMO 10 CARACTERES)"></input>
            <input id="confirmarsenhacad" placeHolder="CONFIRMAR SENHA"></input>
            <button id='buttoncad'>ADICIONAR</button>
            <input type="radio" id='adminput' value="sim"/>
            <label id='admlabel'>ADMINISTRADOR</label>
            <input type="radio" id='funcinput' value="sim"/>
            <label id='funclabel'>OPERADOR</label>
        </div>
    );
}

export default cadastro;