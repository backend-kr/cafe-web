import React from 'react';
import { Box, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';

const CafeDetails = () => {
    const { title } = useParams();

    return (
        <Box>
            <Typography variant="h4">{title}</Typography>
            <Typography variant="h4">메뉴 : 커피</Typography>
            <Typography variant="h6">주소 : </Typography>
            <Typography variant="body1">도로명 주소: </Typography>
            <Typography variant="body1">전화번호: </Typography>
            <Typography variant="body1">홈페이지: </Typography>
            <Typography variant="body1">영업시간: </Typography>
        </Box>
    );
};

export default CafeDetails;