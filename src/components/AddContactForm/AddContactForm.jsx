import { useDispatch, useSelector } from 'react-redux';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { green } from '@mui/material/colors';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import { addContact } from 'redux/contacts/operations';
import { Box, Button, CircularProgress } from '@mui/material';
import { selectContacts, selectIsLoading, } from 'redux/contacts/selectors';
const validation = Yup.object().shape({
    name: Yup.string().min(1, 'Too short name!').required('Name is required'),
    number: Yup.string().min(9, 'Number is too short, use 000-00-00').max(9, 'Number is too long, use 000-00-00').required('Phone number is required') ,
  })

  
export const AddContactForm = () => {
    const dispatch = useDispatch()
    const contacts = useSelector(selectContacts);
    const isLoading = useSelector(selectIsLoading);
    const formik = useFormik({
        initialValues: {
            name: '',
            number: '',
        },
        validationSchema: validation,
        onSubmit: (values, actions) => {
            if (contacts.filter(contact => contact.name === formik.values.name).length > 0){
                alert('You already have this contact! Please enter another name')
                return
            }else{
                dispatch(addContact({...values}))
                actions.resetForm();
            }
            
         },
      })
    return (
        <div>
             <Typography variant="h6" gutterBottom>
                    Add new contact
                </Typography>
            <Box component="form" noValidate onSubmit={formik.handleSubmit} sx={{ display: 'flex', gap: 1, mb: 3}}>
                <TextField
                required
                id="name"
                name="name"
                label="Contact name"
                placeholder='John'
                autoComplete="given-name"
                variant="standard"
                onChange={formik.handleChange}
                value={formik.values.name}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
                />

                <TextField
                required
                id="number"
                name="number"
                label="Contact Number"
                placeholder='000-00-00'
                variant="standard"
                onChange={formik.handleChange}
                value={formik.values.number}
                error={formik.touched.number && Boolean(formik.errors.number)}
                helperText={formik.touched.number && formik.errors.number}
                />
                 <Box sx={{ m: 1, position: 'relative' }}>
                    <Button
                    variant="contained"
                    disabled={isLoading}
                    type="submit"
                    >
                    Add contact
                    </Button>
                    {isLoading && (
                    <CircularProgress
                        size={24}
                        sx={{
                        color: green[500],
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        marginTop: '-12px',
                        marginLeft: '-12px',
                        }}
                    />
                    )}
                </Box>
            </Box>
        </div>
    )
}