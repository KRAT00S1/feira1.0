import { connection } from "./connection.js";


export async function inserirVisitante(novoVisitante) {
    const comando = `
    INSERT INTO visitante_tb (nome, escolaridade, interesse, previsao_chegada, email, sabendo_feira, telefone, ex_aluno, cpf)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?);
    `

    const [info] = await connection.query(comando, [
        novoVisitante.nome,
        novoVisitante.escolaridade,
        novoVisitante.interesse,
        novoVisitante.previsao,
        novoVisitante.email,
        novoVisitante.sabendo,
        novoVisitante.telefone,
        novoVisitante.exaluno,
        novoVisitante.cpf
    ]);
    return info.insertId
}


export async function Listar() {
const comando = `
Select * from visitante_tb

`    

const [res] = await connection.query(comando)
return res
}