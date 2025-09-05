import { BrowserRouter, Routes, Route } from "react-router";
import Inicio from './inicio.jsx'
import Cadastro from "./cadastro.jsx";
import Login from './login.jsx'
import Qrcode from "./qrcode.jsx";



export default function Navegacao(){
    return(
        <BrowserRouter>
        <Routes>

            <Route path="/" element={<Inicio/>}/>
            <Route path="/cadastro" element={<Cadastro/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/qrcode" element={<Qrcode/>}/>

        </Routes>
        </BrowserRouter>
    )
}