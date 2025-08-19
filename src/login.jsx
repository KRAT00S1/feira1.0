

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
        </div>
    )
}