import { Formik, Field, Form } from 'formik';

export const Registration = () => {
    return(
        <Formik
        initialValues={{
            login: '',
            password: '',
            email: '', 
      }}
      onSubmit = {(values, actions) => {
        const user = {...values}
        actions.resetForm()
        return user
      }}
      >
        <Form>
            <label>
                <span>Login</span>
                <Field name = 'login' placeholder = 'Enter your login...'></Field>
            </label>
            <label>
                <span>Password</span>
                <Field name = 'password' placeholder = 'Enter your password...'></Field>
            </label>
            <label>
                <span>Email</span>
                <Field name = 'email' placeholder = 'Enter your email...'></Field>
            </label>
               
            

        </Form>


      </Formik>
    )
}