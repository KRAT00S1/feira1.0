import visitantesController from './controllers/visitantesController.js';


export function adicionarRotas (api) {
    api.use(visitantesController);
}