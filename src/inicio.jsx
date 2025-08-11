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
                    <img src={logo} className='logo' />
                    <h1>Instituto Nóssa Senhora de Fátima</h1>

                </div>
            </header>

            <main>

                <div className="container-image">


                    <div className="Container-informacao ">
                        <h1>SEJAM TODOS<br/> BEM VINDOS </h1>
                        <div className="sla">_</div>
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
                <div className="apresenta">
                    <img src={ingles} className="img_curso"/>
                    <h3>Inglês intermediário e avançado</h3>
                </div>
                <div className="descri">
                <p>O inglês é fundamental para melhores vagas e salários até 40% maiores. O curso avançado aprimora escrita, audição e fala. Só podem entrar alunos aprovados nas provas anteriores.</p>
                </div>
            </div>

            <div className="carta_curso">
                <div className="apresenta">
                    <img src={info} className="img_curso"/>
                    <h3>Informática básica e avançada</h3>
                </div>
                <div className="descri">
                <p>O curso técnico em Informática forma para atuar em Hardware (montagem, manutenção e redes) e Software (desenvolvimento e bancos de dados).</p>
                </div>
            </div>

            <div className="carta_curso">
                <div className="apresenta">
                    <img src={olho} className="img_curso"/>
                    <h3>Comunicação visual</h3>
                </div>
                <div className="descri">
                <p>Capacita o aluno a criar projetos gráficos, peças publicitárias, marketing digital, fotografia e edição de vídeo, atuando na produção de conteúdo visual, gestão de redes sociais e comunicação empresarial.</p>
                </div>
            </div>

            <div className="carta_curso">
                <div className="apresenta">
                    <img src={anpul} className="img_curso"/>
                    <h3>Administração</h3>
                </div>
                <div className="descri">
                <p>Capacita o aluno para atuar no apoio administrativo em áreas como estoques, RH, logística, marketing e contabilidade, exigindo visão sistêmica, boa comunicação e ética.</p>
                </div>
            </div>

            <div className="carta_curso">
                <div className="apresenta">
                    <img src={carro} className="img_curso"/>
                    <h3>Eletromecânica de Autos</h3>
                </div>
                <div className="descri">
                <p>Curso para Eletricista Instalador com certificado para atuar em redes elétricas e automação.</p>
                </div>
            </div>

            <div className="carta_curso">
                <div className="apresenta">
                    <img src={eletro} className="img_curso"/>
                    <h3>Eletricista Instalador</h3>
                </div>
                <div className="descri">
                <p>
                O curso forma Eletricistas Instaladores para trabalhar com redes elétricas, automação residencial e segurança. Ao final, o aluno recebe certificado para atuar sozinho ou em empresas.</p>
                </div>
            </div>
         

            </div>
        </div>
    )
}