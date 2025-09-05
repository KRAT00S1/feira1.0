import visitanteController from './controllers/visitantesController.js';


export function adicionarRotas (api) {
    api.use(visitanteController);

}