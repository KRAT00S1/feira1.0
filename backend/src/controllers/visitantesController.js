import * as repo from '../repositories/visitantesRepository.js';
import { Router } from "express";

import {getAuthentication} from '../utils/jwt.js'
const autenticador = getAuthentication();

const api = Router();

api.post('/cadastro', async (req, res) => {
  try {
    console.log(req.body);
    await repo.inserirVisitante(req.body);
    res.status(201).send({ message: 'Cadastro realizado com sucesso!' });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: 'Erro ao cadastrar.' });
  }
});

export default api;