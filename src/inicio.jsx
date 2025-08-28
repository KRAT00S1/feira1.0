import { Link } from 'react-router';
import { useState, useEffect } from 'react';
import './inicio.scss';

// Imagens
import logo from './assets/images/logo.png';
import curso from './assets/images/cursos.png';
import ingles from './assets/images/bandeira.png';
import info from './assets/images/info.png';
import eletro from './assets/images/eletro.png';
import olho from './assets/images/icon_olho.png';
import carro from './assets/images/carro.png';
import anpul from './assets/images/ampulheta.png';
import predio from './assets/images/predio.png';
import computador from './assets/images/LL.jpeg';
import frei from './assets/images/vemprofrei.png';

export default function Inicio() {
  // Estado para menu mobile
  const [menuAberto, setMenuAberto] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Efeito para detectar resize e atualizar isMobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) setMenuAberto(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => setMenuAberto(!menuAberto);
  const fecharMenu = () => setMenuAberto(false);

  return (
    <div>
      {/* ================= HEADER ================= */}
      <header>
        <div className="cabecalho">
          {/* Logo e título */}
          <div className="principal">
            <img src={logo} className="logo" alt="Logo Instituto" />
            <h1>Instituto Nossa Senhora de Fátima</h1>
          </div>

          {/* Menu Hamburger para mobile */}
          {isMobile && (
            <div className="menu-hamburguer" onClick={toggleMenu}>
              <div className={`hamburguer-line ${menuAberto ? 'ativo' : ''}`}></div>
              <div className={`hamburguer-line ${menuAberto ? 'ativo' : ''}`}></div>
              <div className={`hamburguer-line ${menuAberto ? 'ativo' : ''}`}></div>
            </div>
          )}

          {/* Links de área admin e inscrição */}
          <div className="arealink">
            <Link to="/login" className="login">AREA ADMIN</Link>
            <Link to="/cadastro" className="inscricao">INSCREVA-SE</Link>
          </div>

          {/* Menu mobile aberto */}
          {isMobile && (
            <div className={`menu-mobile ${menuAberto ? 'aberto' : ''}`}>
              <Link to="/login" className="login-mobile" onClick={fecharMenu}>AREA ADMIN</Link>
              <Link to="/cadastro" className="inscricao-mobile" onClick={fecharMenu}>INSCREVA-SE</Link>
            </div>
          )}
        </div>
      </header>

      {/* Overlay para fechar menu mobile */}
      {isMobile && menuAberto && <div className="menu-overlay" onClick={fecharMenu}></div>}

      {/* ================= MAIN ================= */}
      <main>
        <div className="container-image">
          <div className="Container-informacao">
            <h1>SEJAM TODOS BEM VINDOS</h1>
            <hr />
            <h3>
              Esforço que transforma, e o <br />
              orgulho permanece.
            </h3>
            <Link to="/cadastro" className="inscricao">GARANTA SUA INSCRIÇÃO</Link>
          </div>

          {/* Imagem principal */}
          <div className="imagem2">
            <img src={curso} alt="Cursos" />
          </div>
        </div>
      </main>

      {/* ================= CURSOS ================= */}
      <section>
        <div className="carrosel">
          <h2 className="informacao_secao">Cursos Participantes</h2>
          <div className="localcard">
            {/* Card de cursos */}
            <div className="curso-card">
              <img src={ingles} alt="Curso de Inglês" className="card-image" />
              <h3>INGLÊS</h3>
            </div>
            <div className="curso-card">
              <img src={info} alt="Curso de Informática" className="card-image" />
              <h3>INFORMÁTICA</h3>
            </div>
            <div className="curso-card">
              <img src={eletro} alt="Curso de Elétrica" className="card-image" />
              <h3>ELETRICISTA INSTALADOR</h3>
            </div>
            <div className="curso-card">
              <img src={olho} alt="Curso de Comunicação Visual" className="card-image" />
              <h3>COMUNICAÇÃO VISUAL</h3>
            </div>
            <div className="curso-card">
              <img src={carro} alt="Curso de Eletromecânica de Autos" className="card-image" />
              <h3>ELETROMECÂNICA DE AUTOS</h3>
            </div>
            <div className="curso-card">
              <img src={anpul} alt="Curso de Administração" className="card-image" />
              <h3>ADMINISTRAÇÃO</h3>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PÁTIO ================= */}
      <section className="caixa_andar">
        <div className="informacao_andar">
          <div className="caixa_texto">
            <div className="Borda-texto">
              <h1>PÁTIO</h1>
              <h3 className="convidados">Estandes de empresas convidadas</h3>
              <ul>
                <li>Casa da Mulher Paulistana</li>
                <li>Conexão Bem Maior</li>
                <li>Óticas Carol</li>
                <li>STB</li>
              </ul>

              <h3><strong>Demais estandes</strong></h3>
              <ul>
                <li>CEDESP AVE MARIA</li>
                <li>Metalmecânica – Ajustador e Torneiro Mecânico</li>
                <li>Tecnologia de Redes e Manutenção de Computadores</li>
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
                <li><strong>SALA 4:</strong> Óticas Carol</li>
                <li><strong>SALA 5:</strong> Caixa</li>
                <li><strong>SALA 6:</strong> Inglês</li>
              </ul>
            </div>
          </div>
          <div className="atividade_andar">
            <img src={predio} alt="Pátio" />
          </div>
        </div>
      </section>

      {/* ================= EXPOSIÇÕES ================= */}
      <section className="caixa_andar123">
        <div className="informacao_andar123">
          <div className="caixa_texto123">
            <div className="Borda-texto123">
              <h1>EXPOSIÇÕES</h1>
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
          </div>
          <div className="atividade_andar123">
            <img src={computador} alt="Exposições" />
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="contatos">
        <div className="caixa_loc">
          <h4>LOCALIZAÇÃO</h4>
          <p>Instituto Social Nossa Senhora de Fátima Av. Cel. Octaviano de Freitas Costa, 463 Veleiros - São Paulo - SP 04773-000</p>
        </div>
        <hr />
        <div className="caixa_instituto">
          <img src={logo} alt="Logo" />
          <h2>Instituto Nossa Senhora <br /> de Fátima</h2>
        </div>
        <hr />
        <div className="redes_sociais">
          <h4>CONTATOS</h4>
          <p>
            (11) 3798-5037 - secretaria<br />
            (11) 96398-6252 - secretaria - whatsapp
          </p>
          <div className="link_contatos">
            <a href="mailto:adm@acaonsfatima.org.br">adm@acaonsfatima.org.br</a>
            <a href="mailto:secretaria@acaonsfatima.org.br">secretaria@acaonsfatima.org.br</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
