import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Api from './Api';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Api />, document.getElementById('root'));
registerServiceWorker();
