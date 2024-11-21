import './index.css';
import App from "./App";
import React from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import {Provider} from 'react-redux'
import store from './Redux/ReduxStore';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);


    root.render(
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>

        </BrowserRouter>
    );

