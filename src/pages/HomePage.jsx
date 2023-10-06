import { AddContactForm } from "components/AddContactForm/AddContactForm"
import { ContactsFilter } from "components/ContactsFilter/ContactsFilter"
import { ContactsList } from "components/ContactsList/ContactsList"
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectAuthInfo } from "redux/auth/selectors";

export const HomePage = () => {
    const authData = useSelector(selectAuthInfo)
    return(
        <>
            {authData.isLogged
            ? <>
                <h1>Your contact book</h1>
                <AddContactForm/>
                <ContactsFilter/>
                <ContactsList/>
            </>
            : <p>Please <Link to={'/login'}>LogIn</Link> or <Link to={'/signup'}>Create an account</Link> to use this application</p>}
        </>
             
    )
}