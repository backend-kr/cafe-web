import React, { useState, useEffect } from 'react';
import { Box, Typography, Rating } from '@mui/material';
import { useParams } from 'react-router-dom';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

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

    const rating = 4.6;

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <Box>
            <Slider {...settings}>
                {cafeData.thumbnails.map((thumbnail, index) => (
                    <div key={index}>
                        <img src={thumbnail.url} alt={`slide-${index}`} width="100%"/>
                    </div>
                ))}
            </Slider>
            <Typography variant="h4">{cafeData.title}</Typography>
            <Box display="flex" alignItems="center">
                <Rating value={rating} readOnly />
                <Typography variant="body2" ml={1}>{rating}</Typography>
                <Typography variant="body2" ml={1}>({/*리뷰 수*/}5,243)</Typography>
                <Typography variant="body2" ml={1}>숙소답변(3,236)</Typography>
            </Box>
            <Box display="flex" alignItems="center">
                <LocationOnIcon />
                <Typography variant="body2" ml={1}>{cafeData.address}</Typography>
            </Box>
            <Typography variant="body1">Street Address: {cafeData.road_address}</Typography>
            <Typography variant="body1">Phone number: {cafeData.tel}</Typography>
            <Typography variant="body1">Home page: {cafeData.home_page}</Typography>
            <Typography variant="body1">Hours: </Typography>

        </Box>
    );
};

export default CafeDetails;
