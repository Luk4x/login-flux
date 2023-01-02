import React from 'react';
import ReactDOM from 'react-dom/client';

import Home from './pages/Home';
import Register from './pages/Register';
import GlobalStyles from './GlobalStyles';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <GlobalStyles />
        <Register />
    </React.StrictMode>
);
