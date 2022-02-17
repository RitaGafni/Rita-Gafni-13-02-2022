import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Favorites from './pages/Favorites';
import Home from './pages/Home';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { CssBaseline } from '@mui/material/';

const themeLight = createTheme({
  palette: {
    background: {
      default: '#CEE5D0',
    },
    primary: { main: '#64C9CF' },
  },
});

const themeDark = createTheme({
  palette: {
    background: {
      default: '#222222',
    },
    primary: { main: '#64C9CF' },
  },
});

function App() {
  return (
    <div className='App'>
      <ThemeProvider theme={themeLight}>
        <CssBaseline>
          <Router>
            <NavBar />
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
