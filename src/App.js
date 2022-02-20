import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import GlobalStyle from './styles/global';
import { CustomThemeProvider } from './hooks/ThemeContext';

function App() {
  return (
    <BrowserRouter>
      <CustomThemeProvider>
        <Routes />
        <GlobalStyle />
      </CustomThemeProvider>
    </BrowserRouter>
  );
}

export default App;
