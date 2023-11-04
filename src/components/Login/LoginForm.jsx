import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useFormik } from 'formik'
import { useDispatch } from 'react-redux'
import { login } from "redux/auth/operations"
export const LoginForm = () => {

    const dispatch = useDispatch();  

    const formik = useFormik({
        initialValues: {
            password: '',
            email: '', 
            },
        onSubmit: (values, actions) => {
            console.log({...values})
            dispatch(login({...values}))
            actions.resetForm()
                
        }})

    return (
            <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form onSubmit={formik.handleSubmit}>
                    <label>
                        <span>Email</span>
                        <TextField  margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            autoComplete="email"
                            autoFocus
                            name = 'email' 
                            placeholder = 'Enter your email...'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email}
                            ></TextField>
                    </label>
                    <label>
                        <span>Password</span>
                        <TextField
                         margin="normal"
                         required
                         fullWidth
                         id="password"
                         label="Password"
                         autoComplete="password"
                         name = 'password' 
                         placeholder = 'Enter your password...'
                         onChange={formik.handleChange}
                         onBlur={formik.handleBlur}
                         value={formik.values.password}
                         ></TextField>
                    </label>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Sign In
                    </Button> 
                </form>
            </Box>
        </Container>
    )
}