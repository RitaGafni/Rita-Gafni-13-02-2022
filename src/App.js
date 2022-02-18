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
      default: '#9AD0EC',
    },
    primary: { main: '#7C99AC' },
  },
});

const themeDark = createTheme({
  palette: {
    type: 'dark',
    background: {
      default: '#D885A3',
    },
    primary: { main: '#64C9CF' },
  },
});

function App() {
  const [theme, setTheme] = useState(true);

  const appliedTheme = createTheme(theme ? themeLight : themeDark);

  return (
    <div className='App'>
      <ThemeProvider theme={appliedTheme}>
        <CssBaseline>
          <Router>
            <NavBar setTheme={(theme) => setTheme(theme)} />
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
