import React from 'react';
import ReactDOM from 'react-dom/client';

import GlobalStyles from './GlobalStyles';
import Register from './pages/Register';
import Home from './pages/Home';

import { AuthProvider } from './Context/AuthContext';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <GlobalStyles />
        <AuthProvider>
            <Register />
        </AuthProvider>
    </React.StrictMode>
);
