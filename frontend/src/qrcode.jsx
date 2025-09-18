import './index.scss';
import './qrcode.scss';
import { Link } from 'react-router';
import React, {useState} from 'react';
import logo from './assets/images/logo.png';
import curso from './assets/images/cursos.png';
import api from './api.js';


export default function Login(){
    
    const [formData, setFormData] = useState({
        cpf: ''
    });
    

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const dataToSend = {
            ...formData,
        };
        try {
            await api.post('/qrcode', dataToSend);
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
                        <Link to={'/'}><img src={logo} className='logo' /></Link>
                        <h1>Instituto Nossa Senhora de Fátima</h1>
                    </div>
                </div>
            </header> 


            <main>
                <div className='container-card'>
                
                    <div className="container-principal">
                    
                        <div className="container-sobreposisao">
                            <form className="container-campos" onSubmit={handleSubmit}>
                        
                                <h1>QR CODE</h1>

                                <label>
                                    <p>CPF:</p>
                                    <input className="nome" type="text" placeholder='CPF' name='CPF' value={formData.cpf} onChange={handleChange}/>
                                </label>

                                <button type="submit" className='cadastrar'>Entrar</button>
                            </form>
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