import { AddContactForm } from "components/AddContactForm/AddContactForm"
import { ContactsFilter } from "components/ContactsFilter/ContactsFilter"
import { ContactsList } from "components/ContactsList/ContactsList"
import { useAuth } from "hooks/useAuth";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectAuthInfo } from "redux/auth/selectors";

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