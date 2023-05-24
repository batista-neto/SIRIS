import '../css/cadastro.css'

export const Cadastro = () => {
    return (
        <div id="adm" className="box">
            <h1>CADASTRAR</h1>
            
            <input type='text' id="usernamecad" placeHolder="NOME COMPLETO"></input>
            <input type='number' id="matriculacad" placeHolder="MATRÍCULA"></input>
            <input type='password' id="senhacad" placeHolder="SENHA (MÁXIMO 10 CARACTERES)"></input>
            <input type='password' id="confirmarsenhacad" placeHolder="CONFIRMAR SENHA"></input>
            
            <button type='submit' id='buttoncad'>ADICIONAR</button>

            <input type="checkbox" id='adminput'/>
            <label id='admlabel'>ADMINISTRADOR</label>
        
            <input type="checkbox" id='funcinput'/>
            <label id='funclabel'>OPERADOR</label>
           
        </div>
    )
};