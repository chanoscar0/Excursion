import ReactDOM from 'react-dom';
import React from 'react';
import App from './client/App.jsx';
import { render } from 'react-dom';
import store from './store';
import { Provider } from 'react-redux';

render(<Provider store = {store}><App /></Provider>, document.getElementById('root'));