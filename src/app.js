import ReactDOM from 'react-dom';
import React, { PropTypes } from 'react';
import {Provider} from 'react-redux';
import routes from './routes';
import configureStore from './state';
import { syncHistoryWithStore } from 'react-router-redux';
import {Router,Route,IndexRoute,hashHistory,browserHistory} from 'react-router';
import MediaQuery from 'react-responsive';
//import 'antd/dist/antd.css'
import "./app.less"


const store = configureStore();

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    {routes(history)}
  </Provider>
,document.getElementById('root'));
