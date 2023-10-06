import { ContactsFilter } from "components/ContactsFilter/ContactsFilter";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectAuthInfo } from "redux/auth/selectors";
import { removeContact } from "redux/contacts/operations";
import { selectContacts } from "redux/contacts/selectors";
import { selectNameFilter } from "redux/filters/selectors";


export const ContactsList = () => {


    const contacts = useSelector(selectContacts);
    const nameFilter = useSelector(selectNameFilter)
    const dispatch = useDispatch();
    const visibleContacts = contacts.filter(contact => contact.name.toLowerCase().includes(nameFilter.toLowerCase()))
    return(
    <>
        <ContactsFilter/>
        <ul>
            {contacts.map(contact => {
                return(
                    <li key = {contact.id}>
                        <div>                        
                            <span>{contact.name}:</span>  <span>{contact.tel}</span>
                        </div>
                        <div>
                        <button
                        type="button" onClick={() => dispatch(
                            removeContact(contact)
                            )}>Delete</button> 
                        </div>
                    </li>
                )
            })}
        </ul>
    </>     
    )
}