import './index.scss'
import './cadastro.scss'
import { Link } from 'react-router'


import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



import logo from './assets/images/logo.png'



export default function Cadastro(){
    return(
        <div> 
            <header>

                   <div className="cabecalho">
                                    <Link to={'/'}><img src={logo} className='logo' /></Link>
                                    <h1>Instituto Nóssa Senhora de Fátima</h1>
                
                                </div>

                            
                
            
            </header>

  
            
            </div>
    )
}