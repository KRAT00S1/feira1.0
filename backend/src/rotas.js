import visitantesController from './controllers/visitantesController.js';
import loginController from './controllers/loginController.js';


export function adicionarRotas (api) {
    api.use(visitantesController);
    api.use(loginController);
}