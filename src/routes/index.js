import React, {Component} from 'react';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import MediaQuery from 'react-responsive';

import Frame from '../layout/Frame'
import Main from '../containers/Main/Main.js'
import Experience from '../containers/Experience/experience'
import MobileHeader from '../containers/Main/MobileMain.js'
import Reform from '../containers/Reform/Reform.js';
import ReformItems from '../containers/Reform/ReformItems/ReformItems.js'
import ReformProduct from '../containers/Reform/ReformProduct/ReformProduct'
import Instance from '../containers/instance/instance';
import InstanceItems from '../containers/instance/InstanceItems/InstanceItems'
import InstanceItem from '../containers/instance/InstanceItem/InstanceItem'
import Joinus from '../containers/Joinus/Joinus'
import Dynamics from '../containers/Dynamics/Dynamics'
import DynamicsItems from '../containers/Dynamics/DynamicsItems/DynamicsItems.js'
import DynamicsItem from '../containers/Dynamics/DynamicsItem/DynamicsItem'
import Callus from '../containers/Callus/Callus.js'
import Test from './test.js'

const routes = history => (
  <div>
      <Router history={history}>
        <Route path='/' component={Frame}>
          <IndexRoute component={Main}/>
          <Route path='/experience' component={Experience}></Route>
          <Route path='/reform' component={Reform}>
            <IndexRoute component={ReformItems}></IndexRoute>
            <Route path='product/:id' component={ReformProduct}></Route>
          </Route>
          <Route path='/instance' component={Instance}>
            <IndexRoute component={InstanceItems}></IndexRoute>
            <Route path='item/:id' component={InstanceItem}></Route>
          </Route>
          <Route path='joinus' component={Joinus}/>
          <Route path='/dynamics' component={Dynamics}>
            <IndexRoute component={DynamicsItems}></IndexRoute>
            <Route path='hotel/:id' component={DynamicsItem}></Route>
          </Route>
          <Route path='callus' component={Callus}></Route>
          <Route path='test' component={Test}></Route>
        </Route>
      </Router>
  </div>
);
export default routes;
