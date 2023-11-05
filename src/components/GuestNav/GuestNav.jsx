import { Box, Button} from "@mui/material"
import { StyledLink } from "./GuestNav.styled"

export const GuestNav = () => {
    return(
        
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <StyledLink to={'/'}>

                <Button
                    sx={{ color: 'white', display: 'block', fontSize: 18 }}>
                    Home
                </Button>
            </StyledLink>

            <StyledLink to = {'/login'}>
                <Button
                    sx={{ color: 'white', display: 'block', fontSize: 18 }}
                >
                    Login
                </Button>
                </StyledLink>
            <StyledLink to = {'/signup'}>
                <Button
                    sx={{ color: 'white', display: 'block', fontSize: 18}}
                >
                    Registration
                </Button>
            </StyledLink>

          </Box>
    )
}