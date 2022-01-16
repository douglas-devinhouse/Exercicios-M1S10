import { useContext } from "react"
import { AuthContext } from "../../../contexts/auth"

export const AuthConsumer = () => {
    const {authenticated, setAuthenticated} = useContext(AuthContext);
    
    return(
        <div>
            <button onClick={() => setAuthenticated(!authenticated)}>{authenticated ? 'Logout' : 'Login'}</button>            
            <p>{authenticated ? `Douglas Maicon`: ``}</p>
        </div>        
    )
}