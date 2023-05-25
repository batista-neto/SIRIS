import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../Auth/context'
import './login.css'
import axios from 'axios';


export const Login = () => { 

  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginSuccess, setLoginSuccess] = useState(false);

  const handleLogin = async () => {
    try {
      // Fazer a solicitação de login para o servidor backend
      const response = await axios.post('http://localhost:5000/login', {
        username,
        password,
      });

      // Verificar a resposta do servidor
      if (response.data.message === 'Login successful') {
        // Login bem-sucedido
        setLoginSuccess(true);
        console.log("resposta recebida");
        if (response.data.role === 'Administrator') {
          // Redirecionar para a página de administrador
          console.log('Redirecionando para /adm');
          return navigate('/adm');
        } else if (response.data.role === 'User') {
          console.log('Redirecionando para /func');
          return navigate('/adm/cadastro');
        }
      } else {
        // Login falhou
        return setLoginSuccess(false);
      }
    } catch (error) {
      // Tratar erros de solicitação
      console.error('Erro ao fazer login:', error);
      setLoginSuccess(false);
    }
  };

    return (   
       <div>
            <div id="login" className="box">
                <h1>Faça seu Login</h1>
                <p1 id='invalid'>Usuário ou senha inválidos</p1>
                <input 
                    type='text'
                    id="usernamelogin"
                    placeHolder="USERNAME"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)} ></input>

                <input 
                    type='password'
                    id="senhalogin" 
                    placeHolder="SENHA" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    ></input>
                <button type='submit' id='buttonlogin' onClick={handleLogin} >
                    LOGIN
                </button>
            </div>
        </div>
    )
    }
