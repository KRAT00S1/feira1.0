import * as repo from '../repositories/visitantesRepository.js';

import { Router } from "express";
const endpoints = Router();

endpoints.post('/visitante', async (req,resp)=>{
    console.log('POST /visitante called with body:', req.body);
    try {
        let novo = req.body
        let id = await repo.inserirVisitante(novo)
        console.log('Inserted visitante with id:', id);
        resp.send({novoid:id});
    }
    catch (err) {
        console.error('Error inserting visitante:', err);
        resp.status(400).send({
            erro: err.message
        })
    }
})

endpoints.get('/visitante', async (req,resp)=>{
    console.log('GET /visitante called');
    try {
        let reg = await repo.Listar()
        resp.send(reg)
    } catch (err) {
        console.error('Error fetching visitantes:', err);
        resp.status(500).send({ erro: err.message });
    }
})




export default endpoints