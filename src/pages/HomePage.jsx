import { useAuth } from "hooks/useAuth";
import { Link } from "react-router-dom";

export const HomePage = () => {
    const isLogged = useAuth().isLogged
    return(
        <>
            {isLogged
            ? <p>
                Welcome back. Nice to see You again!
            </p>
            : <p>Please <Link to={'/login'}>LogIn</Link> or <Link to={'/signup'}>Create an account</Link> to use this application</p>}
        </>
             
    )
}