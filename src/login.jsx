

import './index.scss'
import './login.scss'
import { Link } from 'react-router';
import logo from './assets/images/logo.png';


export default function Login(){
    return(
        <div>
            <header>
                <div className="cabecalho">
                    <div className="principal">
                        <Link to={'/'}><img src={logo} className='logo' /></Link>
                        <h1>Instituto Nossa Senhora de Fátima</h1>
                    </div>
                </div>
            </header> 

            <main>
            <div className='container-card'>
                
                <div className="container-principal">
                    
                <div className="container-sobreposisao">
                    <div className="container-campos">
                      
                    <h1>LOGIN</h1>
                        <input className='nome' type="text" placeholder='Usuario:' />
                        <input className='senha' type="password" placeholder='Senha:' id="" />
                    </div>
                </div>
                <div className="container-imagem">
                    
                </div>
                </div>
            </div>


            </main>

        </div>
    )
}