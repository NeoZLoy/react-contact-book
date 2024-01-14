import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { Provider } from 'react-redux';
import { persistor, store } from 'redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';

const defaultTheme = createTheme();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <ThemeProvider theme={defaultTheme}>
    <Container>
      <PersistGate loading = {null} persistor={persistor}>
          <Provider store={store}>
            <BrowserRouter basename='/react-contact-book'>
              <App />
            </BrowserRouter>
          </Provider>
      </PersistGate>
    </Container>
  </ThemeProvider>
</React.StrictMode>

);
