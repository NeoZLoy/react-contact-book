import { Backdrop, Box, Button, CircularProgress, Typography} from "@mui/material";
import { StyledLink } from "components/UserNav/UserNav.styled";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "redux/auth/operations";
import { selectIsLoading, selectUser } from "redux/auth/selectors"


export const UserNav = () => {

    const userName = useSelector(selectUser).name;
    const dispatch = useDispatch();
    const handleLogOut = () => {
        dispatch(logOut())
    }
    const isLoading = useSelector(selectIsLoading);


    return(
       
        <Box sx ={{ display: 'flex', mb: 1, mt: 1, justifyContent:'space-between' }}>
            {
                isLoading && <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open = {isLoading}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
            }       
           <Box sx={{display: 'flex', alignItems: 'center'}}>
            <StyledLink to={'/'}>
                    <Button
                        sx={{ color: 'white', display: 'block', fontSize: 18 }}>
                        Home
                    </Button>
                </StyledLink>
                <StyledLink to={'/contacts'}>
                    <Button
                        sx={{ color: 'white', display: 'block', fontSize: 18 }}>
                        Contacts
                    </Button>
                </StyledLink>
            </Box>
            <Box sx = {{display: 'flex', alignItems: 'center'}}>
                <Typography sx ={{px: '10px', py: '4px'}}>Hello, {userName}</Typography>
                <Button  type="submit"
                        variant="contained"
                        size="small"
                        sx={{ ml: 2 }} onClick={handleLogOut}>Log out</Button>
            </Box>
        </Box>
    )
}