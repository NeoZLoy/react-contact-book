import { useDispatch, useSelector } from "react-redux";
import { removeContact } from "redux/contacts/operations";
import { selectContacts, selectIsLoading } from "redux/contacts/selectors";
import { selectNameFilter } from "redux/filters/selectors";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ContactPageOutlinedIcon from '@mui/icons-material/ContactPageOutlined';
import { Alert, Avatar, Button, List, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import CircularProgress from '@mui/material/CircularProgress';



export const ContactsList = () => {


    const contacts = useSelector(selectContacts);
    const nameFilter = useSelector(selectNameFilter)
    const dispatch = useDispatch();
    const isLoading = useSelector(selectIsLoading)
    const visibleContacts = contacts.filter(contact => contact.name.toLowerCase().includes(nameFilter.toLowerCase()))
    return visibleContacts.length === 0
            ? <>
                <Alert variant="outlined" severity="info" sx={{mt: 1}}>
                    We can't find any contacts :c
                </Alert>
            </>
            :   <>
            {isLoading && <CircularProgress/>}
            <List
            sx={{width: '320px'}}>
                {visibleContacts.map(contact => {
                    return(
                        
                            <ListItem
                                key={contact.id}
                            >
                                <ListItemAvatar>
                                    <Avatar>
                                    <ContactPageOutlinedIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    primary={contact.name}
                                    secondary={contact.number}
                                />
                                 <Button onClick={() => dispatch(removeContact(contact.id))} >
                                    <DeleteOutlineIcon />
                                </Button>
                            </ListItem>
                     
                    )
                })}
            </List>

        </>  
        }