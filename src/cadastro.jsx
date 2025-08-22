import './index.scss'
import './cadastro.scss'
import { Link } from 'react-router'




import logo from './assets/images/logo.png'
import cursos from './assets/images/cursos.png'
import centro from './assets/images/imagem_central.png'




export default function Cadastro(){

    function handleSubmit(e){
        e.preventDefault();
    }

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

            {/* <div className="logo">
                    <img src={logo} alt="Logo" height={250}/>
                </div> */}


            <main className='fundo_cadastro'>
            
                <div className="caixa-principal">

                    <img src={centro} className='central' height={600}/>
                    <img src={cursos} className='logo-feira'/>

                    <div className="cadastro-caixa">
                        <h2>Cadastro</h2>

                        <div className='opcoes'>
                            <form method='post' onSubmit={handleSubmit}>
                                <label>
                                    <p>Nome: *</p> <input type="text" placeholder='Nome*'/>
                                </label>
                                
                                <label>
                                    <p>Escolaridade:</p>
                                    <select>
                                        <option value="" selected disabled></option>
                                        <option>Ensino Médio</option>
                                        <option>Ensino Fundamental</option>
                                        <option>Ensino Superior</option>
                                        <option>Nenhuma das Anteriores</option>
                                    </select> 
                                </label>
                                <label>
                                    <p>Curso de interesse (se houver):</p>
                                    <select>
                                        <option value="" selected disabled></option>
                                        <option>Informática</option>
                                        <option>Administração</option>
                                        <option>Comunicação Visual</option>
                                        <option>Inglês</option>
                                        <option>Eletricista Instalador</option>
                                        <option>Eletromecânica de Autos</option>
                                    </select> 
                                </label>
                                <label>
                                    <p>Previsão de chegada:</p><input type="datetime" placeholder='Previsão de chegada' />
                                </label>
                                <label>
                                    <p>Email:</p> <input type="email"placeholder='Email' />
                                </label>
                                <label>
                                    <p>Como ficou sabendo da Feira?:</p>
                                    <select>
                                        <option value="" selected disabled></option>
                                        <option>Amigos</option>
                                        <option>Redes Sociais</option>
                                        <option>Parentes</option>
                                        <option>Escola</option>
                                    </select> 
                                </label>
                                <label>
                                    <p>Já foi aluno do Frei?: *</p>
                                    <select>
                                        <option value="" selected disabled></option>
                                        <option>Sim</option>
                                        <option>Não</option>
                                    </select>
                                </label>
                                <label>
                                    <p>Telefone:</p> <input type="text" placeholder='Telefone'/>
                                </label>
                                <label>
                                    <p>CPF: *</p> <input type="text" placeholder='CPF*'/>
                                </label>
                            </form>
                        </div>

                        <button className='cadastrar'>Cadastrar-se</button>
                    </div>
                    
                </div>
            </main>



{/*

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

*/}


</div>


    )
}