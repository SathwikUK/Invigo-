import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider } from './Context';

import { createRoot } from 'react-dom/client';


createRoot(document.getElementById('root')).render(<ThemeProvider><App /></ThemeProvider>
);
