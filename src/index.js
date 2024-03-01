import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import app from './app.css'
import store from './slice';
import { Provider } from 'react-redux';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App/>
    </Provider>
);
