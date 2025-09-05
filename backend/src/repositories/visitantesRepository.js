import { connection } from "./connection.js";


export async function inserirVisitante(novoVisitante) {
    const comando = `
    INSERT INTO visitantes_tb (nome, escolaridade, interesse, previsao_chegada, email, sabendo_feira, telefone, ex_aluno, cpf)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?);
    `

    const [info] = await connection.query(comando, [
        novoVisitante.nome,
        novoVisitante.escolaridade,
        novoVisitante.interesse,
        novoVisitante.previsao_chegada,
        novoVisitante.email,
        novoVisitante.sabendo_feira,
        novoVisitante.telefone,
        novoVisitante.ex_aluno,
        novoVisitante.cpf
    ]);
    return info.insertId
}