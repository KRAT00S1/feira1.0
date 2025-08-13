import { Link } from 'react-router'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



import './inicio.scss'
import './index.scss'


import logo from './assets/images/logo.png'
import curso from './assets/images/cursos.png'
import ingles from './assets/images/bandeira.png'
import info from './assets/images/info.png'
import eletro from './assets/images/eletro.png'
import olho from './assets/images/icon_olho.png'
import carro from './assets/images/carro.png'
import anpul from './assets/images/ampulheta.png'

export default function Inicio() {

        const data = [
        { id: '1', image: ingles, text: <div><h1>INGLES</h1><h3>Intermediario e avançado</h3></div> },
        { id: '2', image: info, text: <div><h1>INFORMÁTICA</h1><h3>Basico e avançado</h3></div> },
        { id: '3', image: eletro, text: <div><h1>ELETRICA</h1><h3>Eletricista Instalador</h3></div> },
        { id: '4', image: olho, text: <div><h1>COMUNICAÇÃO VISUAL</h1><h3>Design intuitivo</h3></div> },
        { id: '5', image: carro, text: <div><h1>ELETRÔNICA DE CARROS</h1><h3>Estetica automotiva</h3></div> },
        { id: '5', image: anpul, text: <div><h1>ADMINISTRAÇÃO</h1><h3>Gestão administrativa</h3></div> }
    ]
    

  
    return (
        <div>
            <header>
                <div className="cabecalho">
                    <img src={logo} className='logo' />
                    <h1>Instituto Nóssa Senhora de Fátima</h1>

                </div>
                <div className="link">

                </div>
            </header>

            <main>

                <div className="container-image">


                    <div className="Container-informacao ">
                        <h1>SEJAM TODOS BEM VINDOS </h1>
                        <hr />
                        
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

                        <Swiper
                    modules={[Pagination, Navigation]}
                    pagination={{ clickable: true }}
                    navigation
                    loop={true}
                    spaceBetween={10}
                    slidesPerView={4}
                >
                    {data.map((item) => (
                        <SwiperSlide key={item.id}>
                            <img
                                src={item.image}
                                alt={`Tecnologia ${item.id}`}
                                className="slide-item"
                            />
                            <div className="slide-text">
                                {item.text}
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            

            </div>
            
        
        </div>
    )
}