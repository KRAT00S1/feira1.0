import { Link } from 'react-router';
import './inicio.scss';

import logo from './assets/images/logo.png';
import curso from './assets/images/cursos.png';
import ingles from './assets/images/bandeira.png';
import info from './assets/images/info.png';
import eletro from './assets/images/eletro.png';
import olho from './assets/images/icon_olho.png';
import carro from './assets/images/carro.png';
import anpul from './assets/images/ampulheta.png';
import predio from './assets/images/predio.png';
import catalogo from './assets/images/andar123.png';
import frei from './assets/images/vemprofrei.png'







export default function Inicio() {
  return (
    <div>
      {/* HEADER */}
      <header>
        <div className="cabecalho">
          <div className="principal">
            <img src={logo} className="logo" alt="Logo Instituto" />
            <h1>Instituto Nóssa Senhora de Fátima</h1>
          </div>
          <Link to={'/cadastro'} className="inscricao">
            INSCREVA-SE
          </Link>
        </div>
      </header>

      
      <main>
        <div className="container-image">
          
          <div className="Container-informacao">
            <h1>SEJAM TODOS BEM VINDOS</h1>
            <hr />
            <h3>
              Esforço que transforma, e o <br />
              orgulho permanece.
            </h3>
            <Link to={'/cadastro'} className="inscricao">
              GARANTA SUA INSCRIÇÃO
            </Link>
          </div>

          {/* Imagem principal */}
          <div className="imagem2">
            <img src={curso} alt="Cursos" />
          </div>
        </div>
      </main>

      {/* CURSOS */}
      <section>
        <h2 className='informacao_secao' >Cursos Participantes</h2>
        <div className="carrosel">
          {/* Card 1 - Inglês */}
          <div className="curso-card">
            <img src={ingles} alt="Curso de Inglês" className="card-image" />
            <h3>INGLÊS</h3>
            <p>Intermediário e avançado</p>
          </div>

          {/* Card 2 - Informática */}
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
      </section>


      <h2 className='informacao_secao'>PROGRAMAÇÃO 5ª FEIRA DE PROFISSÕES</h2>
      
      <section className="caixa_andar">
        
        <div className="informacao_andar">
          <div className="caixa_texto">
            <h1>PÁTIO</h1>
            <h3>
              <strong>Estandes de empresas convidadas</strong>
            </h3>
            <ul>
              <li>Casa da Mulher Paulistana</li>
              <li>Conexão Bem Maior</li>
              <li>Óticas Carol</li>
              <li>STB</li>
            </ul>

            <h3>
              <strong>Demais estandes</strong>
            </h3>
            <ul>
              <li>CEDESP AVE MARIA</li>
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

            <h3>Salas</h3>
            <ul>
              <li>
                <strong>SALA 4:</strong> Óticas Carol
              </li>
              <li>
                <strong>SALA 5:</strong> Caixa
              </li>
              <li>
                <strong>SALA 6:</strong> Inglês
              </li>
            </ul>
          </div>

          <img src={predio} alt="" className="atividade_andar" />
        </div>
      </section>


          <section className="caixa_andar123">
          
          <div className="informacao_andar123">
          <div className="caixa_texto123">
            <h1>ATRAÇÕES PRESENTES</h1>

            <h3>1° ANDAR</h3>
          <ul>
            <li>SALA 18 – ADMINISTRAÇÃO: Empreendedorismo e Logística</li>
            <li>SALA 19 – CREAS</li>
            <li>SALA 20 – ADMINISTRAÇÃO: Recursos Humanos, Contabilidade e Documentos Técnicos</li>
          </ul>

          <h3>2° ANDAR</h3>
          <ul>
            <li>SALA 24 – Comunicação Visual: Corel Draw, Photoshop e Caricaturas</li>
            <li>SALA 25 – Informática: montagem, configuração e redes</li>
            <li>SALA 26 – Informática: programação</li>
            <li>SALA 27 – Elaboração de currículo</li>
          </ul>

          <h3>3° ANDAR/AUDITÓRIO</h3>
          
          <ul>
            <li>Simulação de entrevista de emprego</li>
            <li>Oficina de Linkedin</li>
          </ul>

          </div>

          <img src={catalogo} alt="" className="atividade_andar123" />
          </div>
</section>


<footer className="contatos">
<div className="caixa_instituto">
<img src={logo} alt="" />
<h2>Instito Nossa Senhora <br/> de Fatima</h2>

</div>
<hr/>
<div className="caixa_loc">

  <h4>LOCALIZAÇÃO</h4>

  <p>Instituto Social Nossa Senhora de Fátima
Av. Cel. Octaviano de Freitas Costa, 463 
Veleiros - São Paulo - SP 04773-000</p>



</div>
<hr/>
<div className="redes_sociais">

  <p>(11) 3798-5037 - secretaria<br/>
(11) 96398-6252 - secretaria - whatsapp</p>

<div className="link_contatos">
<a href="">adm@acaonsfatima.org.br</a>
<a href="">secretaria@acaonsfatima.org.br</a>
</div>




</div>



</footer>

<footer>
<img src={frei} alt="" className='imagem_frei'/>
</footer>



      
    </div>
  );
}
