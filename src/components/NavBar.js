import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../weatherRedux';
import configData from '../config.json';

export default function NavBar() {
  const [selectedPage, setSelectedPage] = useState('home');
  const dispatch = useDispatch();
  const { updateSelectedCity } = bindActionCreators(actionCreators, dispatch);

  const handlePageChange = (event, newChoise) => {
    if (newChoise !== null) {
      setSelectedPage(newChoise);
    }
  };

  const handleBackToHome = () => {
    setSelectedPage('home');
    updateSelectedCity(configData.DEFAULT_CITY_KEY, configData.DEFAULT_CITY);
  };

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position='static' sx={{ bgcolor: '#DEEDF0' }}>
          <Toolbar>
            <Box>
              <ToggleButtonGroup
                value={selectedPage}
                exclusive
                onChange={handlePageChange}
              >
                <ToggleButton
                  component={Link}
                  to='/'
                  onClick={handleBackToHome}
                  value='home'
                >
                  Home
                </ToggleButton>
                <ToggleButton
                  value='favorites'
                  component={Link}
                  to='/favorites'
                >
                  Favorits
                </ToggleButton>
              </ToggleButtonGroup>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}
