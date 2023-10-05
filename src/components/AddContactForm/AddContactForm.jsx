import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { Formik, Field, } from 'formik';
import { StyledButton, StyledError, StyledField, StyledForm, StyledLabel } from './AddContactForm.styled';
import { addContact } from 'redux/operations';
import { selectContacts } from 'redux/contacts/selectors';


const validation = Yup.object().shape({
    name: Yup.string().min(1, 'Too short name!').required('Name is required'),
    tel: Yup.string().min(9, 'Number is too short, use 000-00-00').max(9, 'Number is too long, use 000-00-00').required('Phone number is required') ,
  })

export const AddContactForm = () => {
    const dispatch = useDispatch()
    const contacts = selectContacts;
    return (
        <>
            <h2>Phonebook</h2>
            <Formik
            initialValues={{
            name: '',
            tel: '',
            }}
            validationSchema={validation}
            onSubmit = {
                (values, actions) => {
                    for (const contact of contacts){
                        if (values.name === contact.name){
                            alert(`${values.name} is already in your contacts`)
                        return
                        }
                        
                    }
                    dispatch(
                        addContact(
                        {...values}
                    ))
                    actions.resetForm();
                }
            }
            >
                <StyledForm>
                    <StyledLabel>
                    <span>Name</span>
                    <StyledField name="name" placeholder="Contact name..." />
                    <StyledError name="name" component="span"/>
                    </StyledLabel>
                    <StyledLabel>
                    <span>Tel</span>
                    <Field name="tel" type = "tel" placeholder="000-00-00" />
                    <StyledError name="tel" component="span"/>
                    </StyledLabel>
                    <StyledButton type = "submit">Add contact</StyledButton>
                </StyledForm>
            </Formik>
        </>
       
    )
}