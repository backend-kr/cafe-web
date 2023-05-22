import { TextField, Box, InputAdornment } from '@mui/material';
import SearchIcon from "@mui/icons-material/Search";

function SearchBar() {
  return (
    <Box sx={{ 
        backgroundColor: 'rgb(38, 50, 56)',
        borderRadius: 4.42653226852417,
    }}>
      <TextField
        fullWidth
        placeholder="Search Cafe"
        InputProps={{
          disableUnderline: true,
          style: { color: 'rgb(165, 165, 165)', fontSize: 20 },
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon sx={{ color: '#ffffff', fontSize: 24 }} /> 
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
}

export default SearchBar;
