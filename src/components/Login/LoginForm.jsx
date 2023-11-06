import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useFormik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import { login } from "redux/auth/operations"
import { selectIsLoading } from 'redux/auth/selectors';
import { Backdrop, CircularProgress } from '@mui/material';
export const LoginForm = () => {

    const dispatch = useDispatch();  
    const isLoading = useSelector(selectIsLoading)
    const formik = useFormik({
        initialValues: {
            password: '',
            email: '', 
            },
        onSubmit: (values, actions) => {
            dispatch(login({...values}))
            actions.resetForm()
                
        }})

    return (
            <Container maxWidth="xs">
                    {
                isLoading && <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open = {isLoading}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
            }     
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
                        type = 'password'
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