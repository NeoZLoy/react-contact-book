import { useDispatch, useSelector } from "react-redux";
import { removeContact } from "redux/contacts/operations";
import { selectContacts } from "redux/contacts/selectors";
import { selectNameFilter } from "redux/filters/selectors";


export const ContactsList = () => {


    const contacts = useSelector(selectContacts);
    const nameFilter = useSelector(selectNameFilter)
    const dispatch = useDispatch();
    const visibleContacts = contacts.filter(contact => contact.name.toLowerCase().includes(nameFilter.toLowerCase()))
    return visibleContacts.length === 0
            ? <>
                <p>We can't find this contact :c</p>
            </>
            :   <>
            <ul>
                {visibleContacts.map(contact => {
                    return(
                        <li key = {contact.id}>
                            <div>                        
                                <span>{contact.name}:</span>  <span>{contact.number}</span>
                            </div>
                            <div>
                            <button
                            type="button" onClick={() => dispatch(removeContact(contact.id))}>Delete</button> 
                            </div>
                        </li>
                    )
                })}
            </ul>
        </>  
        }