import { Box, Button, Typography } from "@mui/material";
import { useAuth } from "hooks/useAuth";
import { StyledLink } from "./HomePage.styled";

export const HomePage = () => {
    const isLogged = useAuth().isLogged
    return(
        <Box sx={{ mt: '8px'}}>
            {isLogged
            ? <Typography sx={{m: '0 auto'}}>
                Welcome back. Nice to see You again!
                See Your <Button  
                    variant="contained">
                        <StyledLink to={'/contacts'}>Contacts</StyledLink>
                    </Button> 
            </Typography>
            : <Typography sx={{textAlign: 'center', fontSize: '18px'}}>
                Please <Button  
                    variant="contained">
                        <StyledLink to={'/login'}>Login</StyledLink>
                    </Button> or <Button  
                    variant="contained">
                        <StyledLink to={'/signup'}>Create an account</StyledLink>
                    </Button>  to use this application
            </Typography>}
        </Box>
             
    )
}