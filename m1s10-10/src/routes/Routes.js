import {Routes, Route, Link} from 'react-router-dom';
import { Contato } from '../components/contato/Contato';

const Home = () => {
    return(
        <div>
            <p>Home</p>
            <Link to="contato" element></Link>
        </div>
    )
}
export const Footer = () => {
    return(
        <footer>
            <Link to="/contato">Contatos</Link>         
        </footer>
        
    )
}

export const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<p>Bem vindo</p>}/>
            <Route path="contato" element={<Contato />}/>

            <Route path="*" element={<Home />}/>              
        </Routes>
    );
};

