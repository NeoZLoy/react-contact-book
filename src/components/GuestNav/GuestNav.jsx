import { Box, Button} from "@mui/material"
import { StyledLink } from "./GuestNav.styled"

export const GuestNav = () => {
    return(
        
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                <StyledLink to={'/'}>

                <Button
                    sx={{ my: 2, color: 'white', display: 'block' }}>
                    Home
                </Button>
                </StyledLink>

                <StyledLink to = {'/login'}>
                <Button
                    sx={{ my: 2, color: 'white', display: 'block' }}
                >
                    Login
                </Button>
                </StyledLink>
                <StyledLink to = {'/signup'}>
                <Button
                    sx={{ my: 2, color: 'white', display: 'block' }}
                >
                    Registration
                </Button>
                </StyledLink>

          </Box>
    )
}