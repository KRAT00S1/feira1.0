import './index.scss';
import './cadastro.scss';
import { Link } from 'react-router';
import React, {useState} from 'react';

import logo from './assets/images/logo.png'
import cursos from './assets/images/cursos.png'
import centro from './assets/images/imagem_central.png'


export default function Cadastro(){

    const [nome, setNome] = useState("");
    const [escolaridade, setEscolaridade] = useState("");
    const [interesse, setInteresse] = useState("");
    const [previsao, setPrevisao] = useState("");
    const [email, setEmail] = useState("");
    const [sabendo, setSabendo] = useState("");
    const [exaluno, setExaluno] = useState("");
    const [telefone, setTelefone] = useState("");
    const [cpf, setCpf] = useState("");

    function handleSubmit(e){
        e.preventDefault();
        alert("Cadastrado!");
    }

    function handleNomeChange(event){
        setNome(event.target.value);
    }
    
    function handleEscolaridadeChange(event){
        setEscolaridade(event.target.value);
    }

    function handleInteresseChange(event){
        setInteresse(event.target.value);
    }

    function handlePrevisaoChange(event){
        setPrevisao(event.target.value);
    }

    function handleEmailChange(event){
        setEmail(event.target.value);
    }

    function handleSabendoChange(event){
        setSabendo(event.target.value);
    }

    function handleExalunoChange(event){
        setExaluno(event.target.value);
    }

    function handleTelefoneChange(event){
        setTelefone(event.target.value);
    }

    function handleCpfChange(event){
        setCpf(event.target.value);
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


            <main className='fundo_cadastro'>
            
                <div className="caixa-principal">

                    <div className="central">
                    <img src={cursos} className='logo-feira'/>
                    </div>


                    <form method='post' onSubmit={handleSubmit} className="cadastro-caixa">
                        <h2>Cadastro</h2>

                        <div className='opcoes'>
                            
                            <label>
                                <p>Nome: *</p>
                                <input type="text" placeholder='Nome*' value={nome} onChange={handleNomeChange}/>
                            </label>

                            <label>
                                <p>Escolaridade:</p>
                                <select value={escolaridade} onChange={handleEscolaridadeChange}>
                                    <option value="" selected disabled>Selecione uma opção</option>
                                    <option value="Ensino Médio">Ensino Médio</option>
                                    <option value="Ensino Fundamental">Ensino Fundamental</option>
                                    <option value="Ensino Superior">Ensino Superior</option>
                                    <option valeu="Nenhuma das Anteriores">Nenhuma das Anteriores</option>
                                </select> 
                            </label>

                            <label>
                                <p>Curso de interesse (se houver):</p>
                                <select value={interesse} onChange={handleInteresseChange}>
                                    <option value="" selected disabled>Selecione uma opção</option>
                                    <option value="Informática">Informática</option>
                                    <option value="Administração">Administração</option>
                                    <option value="Comunicação Visual">Comunicação Visual</option>
                                    <option value="Inglês">Inglês</option>
                                    <option value="Eletricista Instalador">Eletricista Instalador</option>
                                    <option value="Eletromecânica de Autos">Eletromecânica de Autos</option>
                                </select> 
                            </label>

                            <label>
                                <p>Previsão de chegada:</p>
                                <input type="time" placeholder="Previsão de chegada" value={previsao} onChange={handlePrevisaoChange} />
                            </label>

                            <label>
                                <p>Email:</p>
                                <input type="email" placeholder='Email' value={email} onChange={handleEmailChange}/>
                            </label>

                            <label>
                                <p>Como ficou sabendo da Feira?:</p>
                                <select value={sabendo} onChange={handleSabendoChange}>
                                    <option value="" selected disabled></option>
                                    <option value="Amigos">Amigos</option>
                                    <option value="Redes Sociais">Redes Sociais</option>
                                    <option value="Parentes">Parentes</option>
                                    <option value="Escola">Escola</option>
                                </select> 
                            </label>

                            <label>
                                <p>Já foi aluno do Frei?: *</p>
                                <select value={exaluno} onChange={handleExalunoChange}>
                                    <option value="" selected disabled></option>
                                    <option value="Sim">Sim</option>
                                    <option value="Não">Não</option>
                                </select>
                            </label>

                            <label>
                                <p>Telefone:</p>
                                <input type="text" placeholder='Telefone' value={telefone} onChange={handleTelefoneChange}/>
                            </label>
                                
                            <label>
                                <p>CPF: *</p>
                                <input type="text" placeholder='CPF*' value={cpf} onChange={handleCpfChange}/>
                            </label>

                        </div>

                        <button type="submit" className='cadastrar'>Cadastrar-se</button>

                    </form>
                    
                </div>
            </main>



            <footer className="contatos">

                <div className="caixa_loc">

                    <h4>LOCALIZAÇÃO</h4>

                    <p>Instituto Social Nossa Senhora de Fátima
                    Av. Cel. Octaviano de Freitas Costa, 463 
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
                        
                    <p>(11) 3798-5037 - secretaria<br/>
                    (11) 96398-6252 - secretaria - whatsapp</p>

                    <div className="link_contatos">
                        <a href="">adm@acaonsfatima.org.br</a>
                        <a href="">secretaria@acaonsfatima.org.br</a>
                    </div>

                </div>
            </footer>
        </div>
)}