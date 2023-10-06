import { useDispatch} from 'react-redux';
import * as Yup from 'yup';
import {Form, Formik, Field, ErrorMessage, } from 'formik';
import { addContact } from 'redux/contacts/operations';
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
                <Form>
                    <label>
                    <span>Name</span>
                    <Field name="name" placeholder="Contact name..." />
                    <ErrorMessage name="name" component="span"/>
                    </label>
                    <label>
                    <span>Tel</span>
                    <Field name="tel" type = "tel" placeholder="000-00-00" />
                    <ErrorMessage name="tel" component="span"/>
                    </label>
                    <button type = "submit">Add contact</button>
                </Form>
            </Formik>
        </>
       
    )
}