

function Login() {
    return (
        <div>
            <div id="login" className="box">
                <h1>Faça seu Login</h1>
                <p1 id='invalid'>Usuário ou senha inválidos</p1>
                <input id="username" placeHolder="USERNAME"></input>
                <input id="senha" placeHolder="SENHA"></input>
                <button id='button'>LOGIN</button>
                <p>Esqueci minha senha</p>
            </div>
        </div>
    );
  }
  
  export default Login;