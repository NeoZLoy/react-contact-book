import { useDispatch, useSelector } from "react-redux";
import { StyledContactItem, StyledDeleteButton, StyledList } from "./ContactsList.styled"
import { removeContact } from "redux/operations";


export const ContactsList = () => {

    const contacts = useSelector(state => state.contacts.contacts);
    const nameFilter = useSelector(state => state.filters.name)
    const dispatch = useDispatch();
    const visibleContacts = contacts.filter(contact => contact.name.toLowerCase().includes(nameFilter.toLowerCase()))
    return(
        <ul>
            {visibleContacts.map(contact => {
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
    )
}