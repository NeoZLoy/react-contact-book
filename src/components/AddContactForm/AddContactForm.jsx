import { useDispatch } from 'react-redux';
import { Formik, Form, Field} from 'formik';
import * as Yup from 'yup';
import { addContact } from 'redux/contacts/operations';
const validation = Yup.object().shape({
    name: Yup.string().min(1, 'Too short name!').required('Name is required'),
    tel: Yup.string().min(9, 'Number is too short, use 000-00-00').max(9, 'Number is too long, use 000-00-00').required('Phone number is required') ,
  })

export const AddContactForm = () => {
    const dispatch = useDispatch()
    return (
        <div>
            <h2>Phonebook</h2>
            <Formik
            initialValues={{
                name: '',
                number: '',
            }}
            onSubmit={ (values, actions) => {
                dispatch(addContact({...values}))
                actions.resetForm();
             }}>
                <Form>
                    <label>
                        <span>Name</span>
                        <Field name="name" placeholder="Contact name..." />
                    </label>
                    <label>
                        <span>Tel</span>
                        <Field name="number" type = "tel" placeholder="000-00-00" />
                    </label>
                    <button type = "submit">Add contact</button>
                </Form>
            </Formik>
        </div>)}