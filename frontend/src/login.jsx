import './index.scss';
import './login.scss';
import { Link } from 'react-router';
import React, {useState} from 'react';
import logo from './assets/images/logo.png';
import curso from './assets/images/cursos.png';



export default function Login(){
    
    const [usuario, setUsuario] = useState("");
    const [senha, setSenha] = useState("");
    
    function handleSubmit(e){
        e.preventDefault();
    }
    
    function handleUsuarioChange(e){
        setUsuario(e.target.value);
    }
    
    function handleSenhaChange(e){
        setSenha(e.target.value);
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


            <main>
                <div className='container-card'>
                
                    <div className="container-principal">
                    
                        <div className="container-sobreposisao">
                            <div className="container-campos">
                        
                                <h1>LOGIN</h1>

                                <label>
                                    <p>Usuário:</p>
                                    <input className='nome' type="text" placeholder='Usuário' value={usuario} onChange={handleUsuarioChange}/>
                                </label>

                                <label>
                                    <p>Senha:</p>
                                    <input className='senha' type="password" placeholder='Inserir senha' id="" value={senha} onChange={handleSenhaChange}/>
                                </label>

                                <button type="submit" className='cadastrar'>Entrar</button>
                            </div>
                        </div>
                        <div className="container-imagem">
                            <img className='container-curso' src={curso} alt="" /> 
                        </div>
                    </div>
                </div>


{/*--------------FOOTER--------------------------------------------------*/}

                <footer className="contatos">

                    <div className="caixa_loc">
                        <h4>LOCALIZAÇÃO</h4>

                        <p>Instituto Social Nossa Senhora de Fátima <br/>
                        Av. Cel. Octaviano de Freitas Costa, 463 <br/>
                        Veleiros - São Paulo - SP 04773-000</p>
                    </div>
                    <hr/>
                    <div className="caixa_instituto">
                        <img src={logo} alt="" />
                        <h2>Instituto Nossa Senhora <br/> de Fatima</h2>
                    </div>
                    <hr/>
                    <div className="redes_sociais">
                        <h4>CONTATOS</h4>
                    
                        <p>(11) 3798-5037 - secretaria <br/>
                        (11) 96398-6252 - secretaria - whatsapp</p>

                        <div className="link_contatos">
                            <a href="">adm@acaonsfatima.org.br</a>
                            <a href="">secretaria@acaonsfatima.org.br</a>
                        </div>

                    </div>

                </footer>
            </main>
        </div>
    )
}