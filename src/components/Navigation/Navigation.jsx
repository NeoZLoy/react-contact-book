import { GuestNav } from "components/GuestNav/GuestNav";
import { UserNav } from "components/UserNav/UserNav";
import { useAuth } from "hooks/useAuth";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { StyledLink } from "./Navigation.styled";


export const Navigation = () => {
  const isLogged = useAuth().isLogged;
    return (
     <AppBar position="static">
        <Container maxWidth="xl">
          <StyledLink to={"/"}>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              <ContactPhoneIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, mt: 0.5}}/>
              <Typography
                variant="h6"
                noWrap
                sx={{
                  mr: 2,
                  display: { xs: 'none', md: 'flex' },
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >
                Contact Book
              </Typography>
            </Box>
          </StyledLink>
          { isLogged 
          ? <UserNav/>
          : <GuestNav/>}
         
      </Container>
     </AppBar>
    );
  };