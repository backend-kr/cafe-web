import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';

const CafeDetails = () => {
    const { title } = useParams();
    const decodedTitle = decodeURIComponent(title);

    const [cafeData, setCafeData] = useState(null);

    useEffect(() => {
        fetch(`/api/v1/cafe/${decodedTitle}`)
            .then(response => response.json())
            .then(data => setCafeData(data));
    }, [decodedTitle]);

    if (!cafeData) {
        return <div>Loading...</div>;
    }

    return (
        <Box>
            <Typography variant="h4">{cafeData.title}</Typography>
            <Typography variant="h6">Address: {cafeData.address}</Typography>
            <Typography variant="body1">Street Address: {cafeData.road_address}</Typography>
            <Typography variant="body1">Phone number: {cafeData.tel}</Typography>
            <Typography variant="body1">Home page: {cafeData.home_page}</Typography>
            <Typography variant="body1">Hours: </Typography>
        </Box>
    );
};

export default CafeDetails;