import { Formik, Field, Form } from 'formik';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { register } from 'redux/auth/operations';

export const Registration = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    return(
        <>
            <h2>Registration</h2>
            <Formik
                initialValues={{
                name: '',
                password: '',
                email: '', 
                }}
                onSubmit = {(values, actions) => {
                    dispatch(register({...values}))
                    if(register.fulfilled){
                        navigate('/', {replace: true})
                    }
                    actions.resetForm()
                }}>
                <Form>
                    <label>
                        <span>Login</span>
                        <Field name = 'name' placeholder = 'Enter your login...'></Field>
                    </label>
                    <label>
                        <span>Email</span>
                        <Field name = 'email' placeholder = 'Enter your email...'></Field>
                    </label>
                    <label>
                        <span>Password</span>
                        <Field name = 'password' placeholder = 'Enter your password...'></Field>
                    </label>
                    <button type='submit'>Registration</button>
                </Form>
            </Formik>
        </>
        
    )
}