import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './store/store';
import 'antd/dist/antd.css'

// Flag css
import "flag-icon-css/css/flag-icon.min.css";
ReactDOM.render(
<Provider store={store}>
<App />
</Provider>,


  document.getElementById('root')
);


reportWebVitals();
