import React, { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { Link, useLocation } from 'react-router-dom';
import configData from '../config.json';

export default function NavBar() {
  const [selectedPage, setSelectedPage] = useState('home');

  const data = useLocation();

  useEffect(() => {
    if (data.state) {
      setSelectedPage('home');
    }
  }, [data.state]);

  const handlePageChange = (event, newChoise) => {
    if (newChoise !== null) {
      setSelectedPage(newChoise);
    }
  };

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position='static' sx={{ bgcolor: '#F3F0D7' }}>
          <Toolbar>
            <Box>
              <ToggleButtonGroup
                value={selectedPage}
                exclusive
                onChange={handlePageChange}
              >
                <ToggleButton value='home'>
                  <Link
                    to='/'
                    state={{
                      key: configData.DEFAULT_CITY_KEY,
                      cityName: configData.DEFAULT_CITY,
                    }}
                    style={{ textDecoration: 'none' }}
                  >
                    Home
                  </Link>
                </ToggleButton>
                <ToggleButton value='favorites'>
                  <Link to='/favorites' style={{ textDecoration: 'none' }}>
                    Favorites
                  </Link>
                </ToggleButton>
              </ToggleButtonGroup>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}
