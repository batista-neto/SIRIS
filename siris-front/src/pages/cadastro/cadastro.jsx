import './cadastro.css'

export const Cadastro = () => {
    return (
        <div id="pagecad" className="box">
            <h1>CADASTRAR</h1>
            
            <input type='text' id="usercad" placeHolder="NOME COMPLETO"></input>
            <input type='number' id="matriculacad" placeHolder="MATRÍCULA"></input>
            <input type='password' id="passwordcad" placeHolder="SENHA (MÁXIMO 10 CARACTERES)"></input>
            <input type='password' id="confirmpasswordcad" placeHolder="CONFIRMAR SENHA"></input>
            
            <input type="checkbox" id='adminput'/>
            <label id='admlabel'>ADMINISTRADOR</label>
        
            <input type="checkbox" id='funcinput'/>
            <label id='funclabel'>OPERADOR</label>

            <button type='submit' id='buttoncad'>ADICIONAR</button>
           
        </div>
    )
};