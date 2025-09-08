import { connection } from "./connection.js";


export async function inserirLogin(novoLogin) {
    const comando = `
    INSERT INTO login_tb (email, senha)
    VALUES (?, ?);
    `

    const [info] = await connection.query(comando, [
        novoLogin.email,
        novoLogin.senha
    ]);
    return info.insertId
}