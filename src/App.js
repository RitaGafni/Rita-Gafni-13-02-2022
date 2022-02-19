import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Favorites from './pages/Favorites';
import Home from './pages/Home';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material/';
import { useState } from 'react';

const themeLight = createTheme({
  palette: {
    type: 'light',
    background: {
      paper: 'rgba(248, 240, 223)',
      default: '#D7E9F7',
    },
    primary: { main: '#79B4B7' },
  },
});

const themeDark = createTheme({
  palette: {
    mode: 'dark',
    background: {
      card: '#395B64',
    },
    backgroundImage: {
      papre: '#395B64',
    },
  },
});

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const appliedTheme = createTheme(isDarkTheme ? themeDark : themeLight);

  return (
    <div className='App'>
      <ThemeProvider theme={appliedTheme}>
        <CssBaseline>
          <Router>
            <NavBar setIsDarkTheme={(mode) => setIsDarkTheme(mode)} />
            <Routes>
              <Route exact path='/' element={<Home />} />
              <Route path='/favorites' element={<Favorites />} />
            </Routes>
          </Router>
        </CssBaseline>
      </ThemeProvider>
    </div>
  );
}

export default App;
