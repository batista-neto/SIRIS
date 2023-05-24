import '../css/login.css'

function Login() {
    return (
        <div>
            <div id="login" className="box">
                <h1>Faça seu Login</h1>
                <p1 id='invalid'>Usuário ou senha inválidos</p1>
                <input type='text' id="usernamelogin" placeHolder="USERNAME"></input>
                <input type='password' id="senhalogin" placeHolder="SENHA"></input>
                <button type='submit' id='buttonlogin'>LOGIN</button>
            </div>
        </div>
    );
  }
  
  export default Login;