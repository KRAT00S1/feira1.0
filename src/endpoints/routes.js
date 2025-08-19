import visitanteController from './controllers/visitantesController.js';
import loginController from './controllers/loginController.js';
import qrcodeController from './controllers/qrcodeController.js';

export function adicionarRotas (api) {
    api.use(visitanteController);
    api.use(loginController);
    api.use(qrcodeController);
}