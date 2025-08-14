import { BrowserRouter, Routes, Route } from "react-router";
import Inicio from './inicio.jsx'
import Cadastro from "./cadastro.jsx";



export default function Navegacao(){
    return(
        <BrowserRouter>
        <Routes>

            <Route path="/" element={<Inicio/>}/>
            <Route path="/cadastro" element={<Cadastro/>}/>
           

        </Routes>
        </BrowserRouter>
    )
}