import { Link } from 'react-router'



import './inicio.scss'
import './index.scss'


import logo from './assets/images/logo.png'
import curso from './assets/images/cursos.png'
import ingles from './assets/images/bandeira.png'
import info from './assets/images/info.png'
import eletro from './assets/images/eletro.png'
import olho from './assets/images/icon_olho.png'
import carro from './assets/images/carro.png'
import anpul from './assets/images/ampulheta.png'

export default function Inicio() {

  
    return (
        <div>
            <header>
                <div className="cabecalho">
                    <img src={logo} className='logo' />
                    <h1>Instituto Nóssa Senhora de Fátima</h1>

                </div>
                <div className="link">

                </div>
            </header>

            <main>

                <div className="container-image">


                    <div className="Container-informacao ">
                        <h1>SEJAM TODOS BEM VINDOS </h1>
                        <hr />
                        
                        <h3>Esforço que  transforma, e o <br />orgulho permanece.</h3>
                        <button>GARANTA SUA INSCRIÇÃO</button>
                    </div>

                    <div className="imagem2 ">
                        <img src={curso} />

                    </div>


                </div>
            </main>

            <h2>Cursos Participantes</h2>

            <div className="carrosel">

                 <div className="carta_curso">
                
                    <img src={ingles} className="img_curso"/>
                    <h3>Inglês intermediário e avançado</h3>
                
                
            </div>

            <div className="carta_curso">
                
                    <img src={info} className="img_curso"/>
                    <h3>Informática básica e avançada</h3>
                
               
            </div>

            <div className="carta_curso">
                
                    <img src={olho} className="img_curso"/>
                    <h3>Comunicação visual</h3>
                
               
            </div>

            <div className="carta_curso">
                
                    <img src={anpul} className="img_curso"/>
                    <h3>Administração</h3>
                
              
            </div>

            <div className="carta_curso">
                
                    <img src={carro} className="img_curso"/>
                    <h3>Eletromecânica de Autos</h3>
                
                
            </div>

            <div className="carta_curso">
                
                    <img src={eletro} className="img_curso"/>
                    <h3>Eletricista Instalador</h3>
                
              
            </div>
         

            </div>
        </div>
    )
}