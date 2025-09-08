import './index.scss';
import './cadastro.scss';
import { Link } from 'react-router';
import React, {useState} from 'react';

import logo from './assets/images/logo.png'
import cursos from './assets/images/cursos.png'
import centro from './assets/images/imagem_central.png'
import api from './api.js';


export default function Cadastro(){

        const [formData, setFormData] = useState({
            nome: '',
            escolaridade: '',
            interesse: '',
            previsao: '',
            email: '',
            sabendo: '',
            exaluno: '',
            telefone: '',
            cpf: ''
        });
        

        const handleChange = (e) => {
            setFormData({ ...formData, [e.target.name]: e.target.value });
        };

        const handleSubmit = async (e) => {
            e.preventDefault();
            const dataToSend = {
                ...formData,
                exaluno: formData.exaluno === 'Sim' ? 1 : 0
            };
            try {
                await api.post('/cadastro', dataToSend);
                alert('Cadastrado!');
                console.log(formData);
            } catch (err) {
                console.log(err);
            }
        };
    
    
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


            <form className="cadastro-caixa" onSubmit={handleSubmit}>
                <h2>Cadastro</h2>

                <div className='opcoes'>
                    
                    <label>
                        <p>Nome: *</p>
                        <input type="text" placeholder='Nome*' name="nome" value={formData.nome} onChange={handleChange}/>
                    </label>

                    <label>
                        <p>Escolaridade:</p>
                        <select name="escolaridade" value={formData.escolaridade} onChange={handleChange}>
                            <option value="" selected disabled>Selecione uma opção</option>
                            <option value="Ensino Médio">Ensino Médio</option>
                            <option value="Ensino Fundamental">Ensino Fundamental</option>
                            <option value="Ensino Superior">Ensino Superior</option>
                            <option value="Nenhuma das Anteriores">Nenhuma das Anteriores</option>
                        </select> 
                    </label>

                    <label>
                        <p>Curso de interesse (se houver):</p>
                        <select name="interesse" value={formData.interesse} onChange={handleChange}>
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
                        <input type="time" placeholder="Previsão de chegada" name="previsao" value={formData.previsao} onChange={handleChange}/>
                    </label>

                    <label>
                        <p>Email:</p>
                        <input type="email" placeholder='Email' name="email" value={formData.email} onChange={handleChange}/>
                    </label>

                    <label>
                        <p>Como ficou sabendo da Feira?:</p>
                        <select name="sabendo" value={formData.sabendo} onChange={handleChange}>
                            <option value="" selected disabled></option>
                            <option value="Amigos">Amigos</option>
                            <option value="Redes Sociais">Redes Sociais</option>
                            <option value="Parentes">Parentes</option>
                            <option value="Escola">Escola</option>
                        </select> 
                    </label>

                    <label>
                        <p>Já foi aluno do Frei?: *</p>
                        <select name="exaluno" value={formData.exaluno} onChange={handleChange}>
                            <option value="" selected disabled></option>
                            <option value="Sim">Sim</option>
                            <option value="Não">Não</option>
                        </select>
                    </label>

                    <label>
                        <p>Telefone:</p>
                        <input type="text" placeholder='Telefone' name="telefone" value={formData.telefone} onChange={handleChange}/>
                    </label>
                        
                    <label>
                        <p>CPF: *</p>
                        <input type="text" placeholder='CPF*' name="cpf" value={formData.cpf} onChange={handleChange}/>
                    </label>

                </div>

                <button type='submit' className='cadastrar'>Cadastrar-se</button>

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