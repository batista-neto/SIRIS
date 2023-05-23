import '../css/login.css'

function Login() {
    return (
        <div>
            <div id="login" className="box">
                <h1>Faça seu Login</h1>
                <p1 id='invalid'>Usuário ou senha inválidos</p1>
                <input id="usernamelogin" placeHolder="USERNAME"></input>
                <input id="senhalogin" placeHolder="SENHA"></input>
                <button id='buttonlogin'>LOGIN</button>
                <p>Esqueci minha senha</p>
            </div>
        </div>
    );
  }
  
  export default Login;