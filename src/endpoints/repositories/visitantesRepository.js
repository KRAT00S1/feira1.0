import connection from '../connection.js';

export async function inserirVisitante(novoVisitante) {
    comando = `
    INSERT INTO visitantes_tb
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
}