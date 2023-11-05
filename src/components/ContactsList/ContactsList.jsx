import { useDispatch, useSelector } from "react-redux";
import { removeContact } from "redux/contacts/operations";
import { selectContacts } from "redux/contacts/selectors";
import { selectNameFilter } from "redux/filters/selectors";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Alert } from "@mui/material";


export const ContactsList = () => {


    const contacts = useSelector(selectContacts);
    const nameFilter = useSelector(selectNameFilter)
    const dispatch = useDispatch();
    const visibleContacts = contacts.filter(contact => contact.name.toLowerCase().includes(nameFilter.toLowerCase()))
    return visibleContacts.length === 0
            ? <>
                <Alert variant="outlined" severity="warning" sx={{mt: 1}}>
                    We can't find any contacts :c
                </Alert>
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
                            type="button" onClick={() => dispatch(removeContact(contact.id))}><DeleteOutlineIcon/></button> 
                            </div>
                        </li>
                    )
                })}
            </ul>
        </>  
        }