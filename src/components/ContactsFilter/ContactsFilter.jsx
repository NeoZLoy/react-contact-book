import { Form, Formik, Field } from "formik"
import { useDispatch } from "react-redux"
import { nameFilter } from "redux/filters/filterSlice";



export const ContactsFilter = () => {
    const dispatch = useDispatch();

    return(
        <div>
            <h3>Find contacts by name:</h3>
            <Formik
            initialValues={{
                searchName: "",
            }}
            >
                <Form onChange={(value) => dispatch(nameFilter(value.target.value))}>
                    <Field name="searchName" placeholder="Contact name to search..." />
                </Form>
            </Formik>
        </div>
        
    )
}