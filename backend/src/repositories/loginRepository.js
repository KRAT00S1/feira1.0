import { connection } from "./connection.js";

export async function consultarCredenciais(email, senha) {
  const comando = `
    SELECT id_admin,
           email
      FROM login
     WHERE email = ?
       and senha = MD5(?)
  `;

  const [registros] = await conection.query(comando, [email, senha]);
  return registros[0];
}


export async function criarLogin(novoLogin) {
    const comando = `
    INSERT INTO login_tb (email, senha)
    VALUES (?, MD5(?));
    `;

    const [info] = await connection.query(comando, [
        novoLogin.email,
        novoLogin.senha
    ]);
    return info.insertId
}