import { Box, TextField, Typography } from "@mui/material";
import { useDispatch } from "react-redux"
import { nameFilter } from "redux/filters/filterSlice";



export const ContactsFilter = () => {
    const dispatch = useDispatch();
    const handleChange = (value) => { 
        dispatch(nameFilter(value.target.value))
    }

    return(
        <div>
            <Typography variant="h6" gutterBottom>
                Find contact by name:
            </Typography> 
            <Box component="form" noValidate sx={{ display: 'flex', gap: 1}}>
            <TextField
                required
                id="searchName"
                name="searchName"
                label="Contact name"
                placeholder='John'
                variant="standard"
                onChange={handleChange}
                />
            </Box>           
        </div>
        
    )
}