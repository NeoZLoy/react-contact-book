import { AddContactForm } from "components/AddContactForm/AddContactForm"
import { ContactsFilter } from "components/ContactsFilter/ContactsFilter"
import { ContactsList } from "components/ContactsList/ContactsList"
import { useAuth } from "hooks/useAuth"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { fetchContacts } from "redux/contacts/operations"

export const Contacts = () => {
    const dispatch = useDispatch();
    const isLogged = useAuth().isLogged
    useEffect(() => {
      dispatch(fetchContacts())
    }, [dispatch])
    
    return(
        <div>
                <h1>Your contact book</h1>
                <AddContactForm/>
                <ContactsFilter/>
                <ContactsList/>
        </div>
    )
}