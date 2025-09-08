import * as repo from '../repositories/visitantesRepository.js';
import { Router } from "express";

const api = Router();

api.post('/cadastro', async (req, res) => {
  try {
    console.log(req.body); // <-- Add this line
    await repo.inserirVisitante(req.body);
    res.status(201).send({ message: 'Cadastro realizado com sucesso!' });
  } catch (error) {
    console.error(error); // <-- Add this line
    res.status(500).send({ error: 'Erro ao cadastrar.' });
  }
});

export default api