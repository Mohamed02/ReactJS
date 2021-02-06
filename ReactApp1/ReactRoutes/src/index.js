import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router} from 'react-router-dom';

import App from './App';
//let city='madrid';

ReactDOM.render(
    <Router>
        <App/>
    </Router>
,document.getElementById('root'));
