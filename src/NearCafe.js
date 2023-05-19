import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardMedia, Typography, Box } from '@mui/material';

const truncateString = (str, num) => {
    if (str.length <= num) {
        return str;
    }
    return str.slice(0, num) + "...";
};

function NearCafeCard({ name, address, roadAddress, latitude, longitude, tel, homePage, businessHoursStart, businessHoursEnd, thumbnails, distance }) {
    
    const thumbnailUrl = (thumbnails) => {
        if (!thumbnails || thumbnails.length === 0) {
            return "/404.png";
        }
        return thumbnails[0].url;
    }

    return (
        <Box display="flex" justifyContent="center" alignItems="center">
            <Card sx={{ maxWidth: 400, maxHeight: 400 }}>
                <CardMedia
                    component="img"
                    alt={name}
                    height="160"
                    image={thumbnailUrl(thumbnails)}
                />
                <CardContent>
                    <Typography gutterBottom variant="h8" component="div">
                        {truncateString(name, 10)} {/* 이름을 25자로 제한합니다. */}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        🏃‍♀{distance}M<br />
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    );
}

export default NearCafeCard;
