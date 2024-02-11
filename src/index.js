import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import {
    ThemeProvider as MuiThemeProvider,
    createTheme,
} from '@mui/material/styles';

import App from './app.js';
import { store } from './state.js';
import './index.css';

// TODO
const theme = createTheme({
    palette: {
        mycompany: {
            primary: '#003366',
        },
    },
});

const WrappedApp = _props => {
    return (
        <Provider store={store}>
            <MuiThemeProvider theme={theme}>
                <App />
            </MuiThemeProvider>
        </Provider>
    );
};

const container = document.getElementById('root');
const root = createRoot(container);

root.render(<WrappedApp />);
