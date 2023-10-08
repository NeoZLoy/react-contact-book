import { Formik, Field, Form } from 'formik'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { login } from "redux/auth/operations"

export const LoginForm = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleLogIn = () => {
        if(login.fulfilled){
            navigate('/contacts', {replace: true})
        }
    }
    return (
        <>
            <Formik
                initialValues={{
                password: '',
                email: '', 
                }}
                onSubmit = {(values, actions) => {
                    dispatch(login({...values}))
                    console.log(dispatch(login({...values}))
                    )
                    actions.resetForm()
                    
                }}>
                <Form>
                    <label>
                        <span>Email</span>
                        <Field name = 'email' placeholder = 'Enter your email...'></Field>
                    </label>
                    <label>
                        <span>Password</span>
                        <Field name = 'password' placeholder = 'Enter your password...'></Field>
                    </label>
                    <button type='submit' onClick={handleLogIn}>Registration</button>
                </Form>
            </Formik>
        </>
    )
}