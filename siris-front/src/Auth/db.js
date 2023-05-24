import mysql from 'mysql2';

const conexao = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Jbneto9',
    database: 'siris'
});

export const autenticacao = (matricula, senha, callback) => {

    //faz a consulta no banco de dados
    conexao.query(
        'SELECT * FROM usuarios WHERE matricula = ? AND senha = ?',
        [matricula, senha],
        (err, results) => {
            if(err) {
                console.log("Erro ao verificar credenciais", err);
                callback(err, null);
            } else {
                callback(null, results);
            }
        }
    )
}