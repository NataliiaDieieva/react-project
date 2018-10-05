// outsource dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import { Router } from 'react-router-dom'
// local dependencies
import './styles/index.css';
import App from './pages/App';
import store from './store'
import history from './history'

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <App />
        </Router>
    </Provider>,
    document.getElementById('root')
);
serviceWorker.unregister();
