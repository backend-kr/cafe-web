import React from 'react';
import { Box, Typography } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

const VerticalAlignedText = ({ cafeData }) => {
  return (
    <Box
      left={0}
      right={0}
      transform="translateY(-50%)"
      borderRadius="4.42653226852417px"
      sx={{
        background: 'linear-gradient(-0.75deg, rgba(0,0,0,1.00) -11.732%,rgba(0,0,0,0.00) 55.823%)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {cafeData.map((cafe, index) => (
        <Box key={index} sx={{ marginBottom: '20px', borderRadius: '8px', position: 'relative' }}>
          <img src={cafe.thumbnails[0].url} alt={cafe.title} style={{ width: '500px', height: '200px', borderRadius: '8px' }} />
          <Typography
            variant="h6"
            style={{
              position: 'absolute',
              bottom: '10px',
              left: '10px',
              color: 'white',
              fontWeight: 'bold',
              fontSize: '20px',
            }}
          >
            {cafe.title}
          </Typography>
          <Box
            sx={{
              position: 'absolute',
              bottom: '10px',
              right: '10px',
              backgroundColor: 'rgba(255, 255, 255, 0.5)',
              borderRadius: '4px',
              padding: '4px',
              fontWeight: 'bold',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              margin: '0px 2.213266134262085px',
              color: 'black',
            }}
          >
            <StarIcon sx={{ fontSize: 20, marginRight: 2 }} />
            <Typography variant="body2" style={{ fontSize: '20px' }}>
              4.7
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default VerticalAlignedText;
