import React from 'react';
import { Box, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';

const CafeDetails = () => {
    const { id } = useParams();

    // 테스트 데이터
    const testData = {
        "1": {
            title: "카페1",
            address: "주소1",
            roadAddress: "도로명 주소1",
            latitude: "위도1",
            longitude: "경도1",
            tel: "전화번호1",
            homePage: "홈페이지1",
            businessHoursStart: "영업시작시간1",
            businessHoursEnd: "영업종료시간1",
            thumbnails: "썸네일1",
            distance: "거리1"
        },
        "2": {
            title: "카페2",
            address: "주소2",
            roadAddress: "도로명 주소2",
            latitude: "위도2",
            longitude: "경도2",
            tel: "전화번호2",
            homePage: "홈페이지2",
            businessHoursStart: "영업시작시간2",
            businessHoursEnd: "영업종료시간2",
            thumbnails: "썸네일2",
            distance: "거리2"
        },
    };

    const cafeData = testData[id];
    console.log(cafeData)
    if (!cafeData) {
        return <Typography variant="body1">해당하는 카페 정보가 없습니다.</Typography>;
    }

    return (
        <Box>
            <Typography variant="h4">{cafeData.title}</Typography>
            <Typography variant="h6">{cafeData.address}</Typography>
            <Typography variant="body1">도로명 주소: {cafeData.roadAddress}</Typography>
            <Typography variant="body1">전화번호: {cafeData.tel}</Typography>
            <Typography variant="body1">홈페이지: {cafeData.homePage}</Typography>
            <Typography variant="body1">영업시간: {cafeData.businessHoursStart} - {cafeData.businessHoursEnd}</Typography>
        </Box>
    );
};

export default CafeDetails;
