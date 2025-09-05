import * as repo from '../repositories/visitantesRepository.js';

import { Router } from "express";
const endpoints = Router();

endpoints.post('/visitante', async (req,resp)=>{
    try {
        let novo = req.body
        let id = await repo.inserirVisitante(novo)
        resp.send({novoid:id});
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})
export default endpoints