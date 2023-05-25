import './adm.css'
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Navigate, useNavigate } from 'react-router-dom';

export const Adm = () => {

    const navigate = useNavigate();
    const handleCadastro = () => {
         navigate('/adm/cadastro')
    }

    const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:5000/users");
      const usersData = response.data;
      setUsers(usersData);
    } catch (error) {
      console.error("Erro ao buscar usuários:", error);
    }
  };

  const getRoleLabel = (role) => {
    return role === 1 ? "Administrador" : "Operador";
  };

    return (
            <div id="admbox" className="box">
                <p1 id='useradm'>Usuário</p1>
                <p2 id='idadm'>Matrícula</p2>
                <p3 id='funcaoadm'>Função</p3>
                <hr></hr>
                <div className="employee-list">
  {users.map((user, index) => (
    <div key={user.id} className="employee">
      <p1>{user.username}</p1>
      <p2>{user.id}</p2>
      <p3>{getRoleLabel(user.role)}</p3>
    </div>
  ))}
</div>


                <button 
                    type='button' 
                    id='buttonadm'
                    onClick={handleCadastro}
                    >NOVO USUÁRIO</button>
            </div>
    )
}

