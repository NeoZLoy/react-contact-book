import { AddContactForm } from "components/AddContactForm/AddContactForm"
import { ContactsFilter } from "components/ContactsFilter/ContactsFilter"
import { ContactList } from "components/ContactsList/ContactsList"

export const HomePage = () => {
    return(
        <>
            <h1>Your contact book</h1>
            <AddContactForm/>
            <ContactsFilter/>
            <ContactList/>
            <p>Login to see your contacts!</p>
        </>
             
    )
}