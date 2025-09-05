import './index.scss';
import './cadastro.scss';
import { Link } from 'react-router';
import React, {useState} from 'react';

import logo from './assets/images/logo.png'
import cursos from './assets/images/cursos.png'
import centro from './assets/images/imagem_central.png'
import api from './api.js';


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

    async function Cadastrar(event) {
        event.preventDefault();
        await api.post('/visitante', {
            "nome": nome,
            "escolaridade": escolaridade,
            "interesse": interesse,
            "previsao": previsao,
            "email": email,
            "sabendo": sabendo,
            "exaluno": exaluno,
            "telefone": telefone,
            "cpf": cpf
        }).then(() => alert('Cadastro realizado!'))
          .catch(e => {
              if(e.response && e.response.data && e.response.data.erro){
                  alert(e.response.data.erro);
              } else {
                  alert('Erro ao cadastrar visitante.');
              }
          });
    }
    
    return(
<div> 
    <header>
        <div className="cabecalho">

            <div className="principal">

                <Link to={'/'}><img src={logo} className='logo'/></Link>
                <h1>Instituto Nossa Senhora de Fátima</h1>   

            </div>

        </div>  
    </header>


    <main className='fundo_cadastro'>
    
        <div className="caixa-principal">

            <div className="central">
            <img src={cursos} className='logo-feira'/>
            </div>


            <form method='post'  className="cadastro-caixa">
                <h2>Cadastro</h2>

                <div className='opcoes'>
                    
                    <label>
                        <p>Nome: *</p>
                        <input type="text" placeholder='Nome*' value={nome} onChange={(e)=>setNome(e.target.value)}/>
                    </label>

                    <label>
                        <p>Escolaridade:</p>
                        <select value={escolaridade} onChange={(e) => setEscolaridade(e.target.value)}>
                            <option value="" selected disabled>Selecione uma opção</option>
                            <option value="Ensino Médio">Ensino Médio</option>
                            <option value="Ensino Fundamental">Ensino Fundamental</option>
                            <option value="Ensino Superior">Ensino Superior</option>
                            <option value="Nenhuma das Anteriores">Nenhuma das Anteriores</option>
                        </select> 
                    </label>

                    <label>
                        <p>Curso de interesse (se houver):</p>
                        <select value={interesse} onChange={(e) => setInteresse(e.target.value)}>
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
                        <input type="time" placeholder="Previsão de chegada" value={previsao} onChange={(e)=>setPrevisao(e.target.value)} />
                    </label>

                    <label>
                        <p>Email:</p>
                        <input type="email" placeholder='Email' value={email} onChange={(e)=> setEmail(e.target.value)}/>
                    </label>

                    <label>
                        <p>Como ficou sabendo da Feira?:</p>
                        <select value={sabendo} onChange={(e)=>setSabendo(e.target.value)}>
                            <option value="" selected disabled></option>
                            <option value="Amigos">Amigos</option>
                            <option value="Redes Sociais">Redes Sociais</option>
                            <option value="Parentes">Parentes</option>
                            <option value="Escola">Escola</option>
                        </select> 
                    </label>

                    <label>
                        <p>Já foi aluno do Frei?: *</p>
                        <select value={exaluno} onChange={(e)=>setExaluno(e.target.value)}>
                            <option value="" selected disabled></option>
                            <option value="Sim">Sim</option>
                            <option value="Não">Não</option>
                        </select>
                    </label>

                    <label>
                        <p>Telefone:</p>
                        <input type="text" placeholder='Telefone' value={telefone} onChange={(e)=>setTelefone(e.target.value)}/>
                    </label>
                        
                    <label>
                        <p>CPF: *</p>
                        <input type="text" placeholder='CPF*' value={cpf} onChange={(e)=>setCpf(e.target.value)
                        }/>
                    </label>

                </div>

                <button type='button' className='cadastrar' onClick={Cadastrar}>Cadastrar-se</button>

            </form>
        </div>
    </main>



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

