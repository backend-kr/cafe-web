import React, { useState, useEffect } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { Box, Grid, Typography, InputBase, IconButton } from '@mui/material';
import config from './components/config';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import mbxGeocoding from "@mapbox/mapbox-sdk/services/geocoding";
import useCafeData from './components/useCafeData';
import CafeDetail from "./components/CafeDetail";
import Header from './components/Header';
import SearchBar from './components/Search';
import Category from './components/Category';
import NearbyCafes from './components/NearCafes';
import BottomBar from './components/BottomBar'
import VerticalAlignedText from './components/VerticalAlignedText'


const geocodingClient = mbxGeocoding({ accessToken: config.mapbox.accessToken });
const theme = createTheme({
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          html: {
            height: '100%',
          },
          body: {
            height: '100%',
            margin: 0,
            overflow: 'hidden',
          },
        },
      },
    },
  });
function App() {
    useEffect(() => {
      document.documentElement.style.height = '100%'; // html 요소의 높이를 100%로 설정
    }, []);
    const [currentLocation, setCurrentLocation] = useState(null);
    const [currentAddress, setCurrentAddress] = useState(null);
    const { cafeData, nearbyCafeData } = useCafeData(currentLocation);

    const getLocation = () => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                setCurrentLocation({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                });
            },
            (error) => {
                console.log(error);
                setTimeout(() => getLocation(), 3000); // 3초 후에 다시 위치 정보 요청
            }
        );
    };
    useEffect(() => {
        getLocation();
    }, []);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                setCurrentLocation({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                });
            },
            (error) => {
                console.log(error);
            }
        );
    }, []);


    useEffect(() => {
        if (currentLocation) {
            geocodingClient.reverseGeocode({
                query: [currentLocation.longitude, currentLocation.latitude],
                limit: 1,
                language: ['ko'],
            })
                .send()
                .then((response) => {
                    if (response && response.body && response.body.features && response.body.features.length > 0) {
                        setCurrentAddress(response.body.features[0].place_name);
                    }
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }, [currentLocation]);

    return (
        <ThemeProvider theme={theme}>
          <Router>
            <Routes>
              <Route
                path="/"
                element={
                  <Box p={2} pt={3} sx={{ backgroundColor: 'rgb(3, 30, 42)', minHeight: '100vh', overflow: 'hidden' }}>
                    <Box mb={2}>
                      <Header />
                    </Box>
                    <SearchBar />
                    <Box mt={1} sx={{ overflow: 'hidden' }}>
                      <Category />
                    </Box>
                    <Box p={2}>
                      <Typography variant="h6" component="div" style={{ color: 'white', fontSize: '20px', fontWeight: 'bold' }}>
                        🔥가장 가까운 카페 List
                      </Typography>
                    </Box>
                    <Box mt={1} sx={{ overflow: 'hidden', paddingLeft: '20px', paddingRight: '20px' }}>
                      <NearbyCafes nearbyCafeData={nearbyCafeData} />
                    </Box>
                    <Box p={2}>
                      <Typography variant="h6" component="div" style={{ color: 'white', fontSize: '20px', fontWeight: 'bold' }}>
                        금주의 핫플레이스
                      </Typography>
                      <Box p={2}>
                        <VerticalAlignedText cafeData={cafeData} />
                      </Box>
                    </Box>
                    <BottomBar />
                  </Box>
                }
              />
              <Route path="/cafe/:title" element={<CafeDetail />} />
            </Routes>
          </Router>
        </ThemeProvider>
      );
    }

export default App;


{/* <ThemeProvider theme={theme}>
<Router>
    <Routes>
        <Route path="/" element={
            <Box>
                {renderSearchBar()}
                {renderCategoryHeader()}
                {currentAddress ? (
                    <NearbyCafeList nearbyCafeData={nearbyCafeData} />
                ) : (
                    <Box p={2} textAlign="center">
                        <Typography variant="body1">현재 주소를 불러올 수 없습니다. 죄송합니다.</Typography>
                    </Box>
                )}
                <HotCafeList cafeData={cafeData} />
            </Box>
        } />
        <Route path="/cafe/:title" element={<CafeDetail />} />
    </Routes>
</Router>
</ThemeProvider> */}