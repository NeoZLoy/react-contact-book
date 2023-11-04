import { useFormik} from 'formik';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import * as yup from 'yup';
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';


const validationSchema = yup.object({
    email: yup
      .string('Enter your email')
      .email('Enter a valid email')
      .required('Email is required'),
    password: yup
      .string('Enter your password')
      .min(6, 'Password should be of minimum 6 characters length')
      .required('Password is required'),
      name: yup
      .string('Enter your Name')
      .required('Name is required'),

  });

export const Registration = () => {
    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues: {
            name: '',
            password: '',
            email: '', 
            },
            onSubmit: (values, actions) => {
                dispatch(register({...values}))
                actions.resetForm()},
            validationSchema: validationSchema,

            })

    return(
        <Container component="main" maxWidth="xs"> 
            <CssBaseline />
            <Box
                sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign up
                </Typography>
                <Box component="form" noValidate onSubmit={formik.handleSubmit} sx={{ mt: 3 }}>
                    <TextField
                    name = 'name'
                    placeholder = 'Name Surname...'
                    autoComplete="given-name"
                    required
                    fullWidth
                    id="name"
                    label="Name"
                    autoFocus
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.name}
                    ></TextField>
                    <TextField 
                    name = 'email'
                    placeholder = 'YourMail@mail.com'
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    autoComplete="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                    ></TextField>
                    <TextField 
                    name = 'password'
                    placeholder = 'Enter your password...'
                    fullWidth
                    id="password"
                    label="Password"
                    type="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.password && Boolean(formik.errors.password)}
                    helperText={formik.touched.password && formik.errors.password}
                    ></TextField>
                    <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    >
                    Sign Up
                    </Button>
                    <Typography variant="body2">
                        <Link to={'/login'}>
                            Already have an account? Sign in
                        </Link>
                    </Typography>            
                </Box>
            </Box>
        </Container>
        
    )
}