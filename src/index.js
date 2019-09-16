import React from 'react';
import ReactDOM from 'react-dom';
import 'core-js';
import App from './App.jsx';
import DefaultErrorBoundary from './DefaultErrorBoundary';
import './style.css';

ReactDOM.render(
    <React.StrictMode>
        <DefaultErrorBoundary>
            <App />
        </DefaultErrorBoundary>
    </React.StrictMode>,
    document.getElementById('root')
);
