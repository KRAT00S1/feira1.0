import { Link } from 'react-router';
import logo from './assets/images/logo.png';
import curso from './assets/images/cursos.png'
import './qrcode.scss'


export default function qrcode(){
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

<div className="container-primario">
    

    <div className="container-qrcode">

    </div>

</div>


</div>



    )
}