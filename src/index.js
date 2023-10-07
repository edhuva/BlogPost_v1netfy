import React from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { StoreProvider } from 'easy-peasy';
import store from "./store";
import App from './App';
import './index.css';

ReactDOM.render(
    <React.StrictMode>
        <StoreProvider store={store}>
            <BrowserRouter>
                <App />        
            </BrowserRouter>
        </StoreProvider>
    </React.StrictMode>
, document.getElementById('root'));