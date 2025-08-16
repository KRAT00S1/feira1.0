import { Link } from 'react-router'



import './inicio.scss'



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

                  <div className="principal">
                    <img src={logo} className='logo' />
                    <h1>Instituto Nóssa Senhora de Fátima</h1>
                    </div>
                <Link to={'/cadastro'} className='inscricao'>INSCREVA-SE</Link>
                </div>
               
            </header>

            <main>

                <div className="container-image">


                    <div className="Container-informacao ">
                        <h1>SEJAM TODOS BEM VINDOS </h1>
                        <hr />
                        
                        <h3>Esforço que  transforma, e o <br />orgulho permanece.</h3>
                        <Link to={'/cadastro'} className='inscricao'>GARANTA SUA INSCRIÇÃO</Link>
                    </div>

                    <div className="imagem2 ">
                        <img src={curso} />

                    </div>


                </div>
            </main>

            <h2>Cursos Participantes</h2>
            
            <div className="carrosel">


                    <div className="curso-card">
          <img src={ingles} alt="Curso de Inglês" className="card-image" />
          
            <h3>INGLÊS</h3>
            <p>Intermediário e avançado</p>
          
        </div>

             <div className="curso-card">
          <img src={info} alt="Curso de Informática" className="card-image" />
          
            <h3>INFORMÁTICA</h3>
            <p>Básico e avançado</p>
          
        </div>

        {/* Card 3 - Elétrica */}
        <div className="curso-card">
          <img src={eletro} alt="Curso de Elétrica" className="card-image" />
          
            <h3>ELÉTRICA</h3>
            <p>Eletricista Instalador</p>
          
        </div>

        {/* Card 4 - Comunicação Visual */}
        <div className="curso-card">
          <img src={olho} alt="Curso de Comunicação Visual" className="card-image" />
          
            <h3>COMUNICAÇÃO VISUAL</h3>
            <p>Design intuitivo</p>
          
        </div>

        {/* Card 5 - Eletrônica de Carros */}
        <div className="curso-card">
          <img src={carro} alt="Curso de Eletrônica Automotiva" className="card-image" />
          
            <h3>ELETRÔNICA DE CARROS</h3>
            <p>Estética automotiva</p>
          
        </div>

        {/* Card 6 - Administração */}
        <div className="curso-card">
          <img src={anpul} alt="Curso de Administração" className="card-image" />
          
            <h3>ADMINISTRAÇÃO</h3>
            <p>Gestão administrativa</p>
          
        </div>

            </div>



            

          <div className="caixa_andar"> 
            <h1>PATIO</h1>

          <div className="caixa_texto">

           
            <ul>
              <li><strong>Estandes de empresas convidadas</strong></li>
                <ul>
                  <li>Casa da Mulher Paulistana</li>
                  <li>Conexão Bem Maior</li>
                  <li>Óticas Carol</li>
                  <li>STB</li>
                </ul>
              
              <h3><strong>Demais estandes</strong></h3>
                
                  <li><strong>CEDESP AVE MARIA</strong></li>
                    <ul>
                      <li>Metalmecânica – Ajustador e Torneiro Mecânico</li>
                      <li>Tecnologia de Redes e Manutenção de Computadores</li>
                    </ul>
                  <ul>
                  <li>Troca de Livros</li>
                  <li>Oficina de Eletromecânica de Autos</li>
                  <li>Oficina de Auto Elétrica</li>
                  <li>Oficina Eletrotécnica</li>
                  <li>Livros do Frei</li>
                  <li>Produtos da Padaria do Frei – doces e salgados</li>
                  <li>Pastel e bebidas (embaixo da escada)</li>
                </ul>
                
                </ul>
            </div>
          <img src="" alt="" className="atividae_nadar" />


          </div>





            
            
        
        </div>
    )
}