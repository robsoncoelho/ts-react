import React from 'react';
import { ThemeProvider } from 'styled-components';
import ReactDOM from 'react-dom';
import App from './components/App';
import theme from './styles/theme';
import GlobalStyle from './styles/globalStyle';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
