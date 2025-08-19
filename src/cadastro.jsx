import './index.scss'
import './cadastro.scss'
import { Link } from 'react-router'




import logo from './assets/images/logo.png'
import cursos from './assets/images/cursos.png'
import ingles from './assets/images/bandeira.png';
import info from './assets/images/info.png';
import eletro from './assets/images/eletro.png';
import olho from './assets/images/icon_olho.png';
import carro from './assets/images/carro.png';
import anpul from './assets/images/ampulheta.png';
import predio from './assets/images/predio.png';
import catalogo from './assets/images/andar123.png';
import frei from './assets/images/vemprofrei.png'




export default function Cadastro(){
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

          

 {/*   <div className="logo">
                <img src={logo} alt="Logo" height={250}/>
                </div>
 */}
            <main  className='fundo_cadastro'>
            

                <div className="cadastro-caixa">
                    <h2>Cadastro</h2>

                    <div className='opcoes'>
                    <input type="text" placeholder='Nome*'/>
                    <select>
                        <option value="" selected disabled>Selecione uma opção</option>
                        <option>Ensino Médio</option>
                        <option>Ensino Fundamental</option>
                        <option>Ensino Superior</option>
                        <option>Nenhuma das Anteriores</option>
                    </select> 
                    <select>
                        <option value="" selected disabled>Interesse em algum curso</option>
                        <option>Informática</option>
                        <option>Administração</option>
                        <option>Comunicação Visual</option>
                        <option>Inglês</option>
                        <option>Eletricista Instalador</option>
                        <option>Eletromecânica de Autos</option>
                    </select> 
                    <input type="datetime" placeholder='Previsão de chegada' />
                    <input type="email"placeholder='Email' />
                    <select>
                        <option value="" selected disabled>Como ficou sabendo da feira</option>
                        <option>Amigos</option>
                        <option>Redes Sociais</option>
                        <option>Parentes</option>
                        <option>Escola</option>
                    </select> 
                    <select>
                        <option value="" selected disabled>Ja foi aluno do Frei?</option>
                        <option>Sim</option>
                        <option>Não</option>
                    </select>
                    <input type="text" placeholder='Telefone'/>
                    <input type="text" placeholder='CPF*'/>
                    </div>
                </div>
            </main>



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

</div>



            

    )
}