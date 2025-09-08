import * as repo from '../repositories/loginRepository.js';
import { Router } from "express";

const api = Router();

api.post('/login', async (req, res) => {
  try {
    console.log(req.body);
    await repo.inserirLogin(req.body);
    res.status(201).send({ message: 'Login realizado com sucesso!' });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: 'Erro ao cadastrar.' });
  }
});

export default api