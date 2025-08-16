import './index.scss'
import './cadastro.scss'
import { Link } from 'react-router'




import logo from './assets/images/logo.png'



export default function Cadastro(){
    return(
        <div> 
            <header>

                   <div className="cabecalho">
                                    <div className="principal">
                                    <Link to={'/'}><img src={logo} className='logo' /></Link>
                                    <h1>Instituto Nóssa Senhora de Fátima</h1>
                                    
                                    </div>
                
                                </div>

                            
                
            
            </header>

  
            
            </div>
    )
}