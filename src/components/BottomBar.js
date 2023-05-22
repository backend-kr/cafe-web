import { Box, IconButton } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExploreIcon from '@mui/icons-material/Explore';

function BottomBar() {
  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 0,
        width: '95%',
        backgroundColor: 'rgb(38, 50, 56)',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        boxShadow: '0px -2.21px 16.6px rgba(0, 0, 0, 0.6)',
        borderRadius: '16.6px 16.6px 0px 0px',
        paddingTop: '16px',
        paddingBottom: '16px',
      }}
    >
      <IconButton sx={{ margin: '0 8px' }}>
        <HomeIcon style={{ color: 'white', fontSize: '1.5em' }} />
      </IconButton>
      <IconButton sx={{ margin: '0 8px' }}>
        <AccountCircleIcon style={{ color: 'white', fontSize: '1.5em' }} />
      </IconButton>
      <IconButton sx={{ margin: '0 8px' }}>
        <ExploreIcon style={{ color: 'white', fontSize: '1.5em' }} />
      </IconButton>
    </Box>
  );
}

export default BottomBar;
