import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import GlobalStyle from './styles/global';
import { CustomThemeProvider } from './hooks/ThemeContext';
import { FavoritesProvider } from './contexts/favorites';

function App() {
  return (
    <BrowserRouter>
    <FavoritesProvider>
      <CustomThemeProvider>
        <Routes />
        <GlobalStyle />
      </CustomThemeProvider>
      </FavoritesProvider>
    </BrowserRouter>
  );
}

export default App;
