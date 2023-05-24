import { useState } from 'react';
import { useAuth } from '../../Auth/context'
import './login.css'
import { autenticacao } from '../../Auth/db';


export const Login = () => { 

    const { login } = useAuth();
    const [matricula, setMatricula] = useState('');
    const [senha, setSenha] = useState('');
    const [ivalideLogin, setInvalideLogin] = useState(false);

    const singup = () => {

        //verifica se os campos estao preechidos
        if (matricula && senha) {
            autenticacao(matricula, senha, (err, resultado) => {
                if(err) {
                    console.log('erro ao fazer login', err);
                    setInvalideLogin(true);
                } else {
                    if (resultado.length > 0) {
                        //usuario e senha encontrado no banco de dados
                        login({ matricula, senha });
                    } else {
                        //usuário ou senha inválidos
                        setInvalideLogin(true);
                    }
                }
            });
        } else {
            setInvalideLogin(true);
        }
    };

    return (   
       <div>
            <div id="login" className="box">
                <h1>Faça seu Login</h1>
                <p1 id='invalid'>Usuário ou senha inválidos</p1>
                <input type='text' id="usernamelogin" placeHolder="USERNAME" value={ matricula } onChange={(e) => setMatricula(e.target.value)}></input>
                <input type='password' id="senhalogin" placeHolder="SENHA" value={ senha } onChange={(e) => setSenha(e.target.value)}></input>
                <button type='submit' id='buttonlogin' onClick={singup}>
                    LOGIN
                </button>
            </div>
        </div>
    )
    }
