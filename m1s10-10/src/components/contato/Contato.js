import { useNavigate } from "react-router-dom"


export const Contato = () => {
    const navigate = useNavigate();
    return (
        <div>         
            <a href="#" onClick={()=>navigate(-1)}>Voltar</a><br />
            <a href="https://www.linkedin.com/in/douglas-maicon-2b464157/">Linkedin</a><br />
            <a href="https://github.com/douglas-devinhouse">GitHub (DevInHouse)</a>
        </div>
    )
}

