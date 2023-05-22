import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';

const StyledScrollbar = styled(Box)(({ theme }) => ({
  overflowX: 'auto',
  scrollBehavior: 'smooth',
  msOverflowStyle: 'none',
  scrollbarWidth: 'none',
  '&::-webkit-scrollbar': {
    display: 'none',
  },
}));

function NearbyCafes({ nearbyCafeData }) {
  return (
    <StyledScrollbar sx={{ width: '500px', height: '300px', my: 2 }}>
      <div
        className="cafe-card-container"
        style={{
          display: 'flex',
          flexDirection: 'row',
          width: `${nearbyCafeData.length * 500}px`, // 300px + 16px margin
        }}
      >
        {nearbyCafeData.map((cafe, index) => (
          <div
            className="cafe-card"
            key={cafe.id}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              width: '200px',
              height: '300px',
              marginRight: index === nearbyCafeData.length - 1 ? 0 : '20px',
              paddingLeft: '8px',
              position: 'relative',
            }}
          >
            {cafe.thumbnails && cafe.thumbnails[0] && (
              <div
                className="cafe-image"
                style={{
                  backgroundImage: `url(${cafe.thumbnails[0].url})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  width: '100%',
                  height: '90%',
                  borderRadius: '8px',
                  paddingBottom: '8px',
                }}
              >
                <Typography
                  variant="body1"
                  style={{
                    position: 'absolute',
                    bottom: '50px',
                    left: '16px',
                    width: '100%',
                    textAlign: 'left',
                    color: 'white',
                    fontSize: '15px',
                    fontWeight: 'bold',
                  }}
                >
                  {cafe.title}
                </Typography>
                <Typography
                  variant="body1"
                  style={{
                    position: 'absolute',
                    bottom: '25px',
                    left: '16px',
                    width: '100%',
                    textAlign: 'left',
                    color: 'white',
                  }}
                >
                  {cafe.distance} m away
                </Typography>
              </div>
            )}
          </div>
        ))}
      </div>
    </StyledScrollbar>
  );
}

export default NearbyCafes;
