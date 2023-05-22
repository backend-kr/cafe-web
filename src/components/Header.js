import React from 'react';
import { Toolbar, Typography, Avatar, Box } from '@mui/material';

function Header() {
    return (
        <Toolbar>
            <Box sx={{ flexGrow: 1 }}>
                <Typography variant="h6" component="div" style={{ color: 'white' }}>
                    Cafemoa
                </Typography>
                <Typography variant="h6" component="div" style={{ color: 'white', fontSize: '32px', fontWeight: 'bold' }}>
                    Let's Chill
                </Typography>
            </Box>
            <Box sm={{ display: 'flex', alignItems: 'center' }}>
                <Avatar alt="User Avatar" src="/path/to/avatar/image" />
            </Box>
        </Toolbar>
    );
}

export default Header;
