import {createStore,applyMiddleware,compose,combineReducers} from 'redux';
import thunk from 'redux-thunk';
import { routerReducer,routerMiddleware, push} from 'react-router-redux';
import {browserHistory,hashHistory} from 'react-router';
import createFetchMiddleware from 'redux-composable-fetch';

import reducers from '../reducers';

const middleware = routerMiddleware(browserHistory);

const finalCreateStore = compose(
  applyMiddleware(thunk,middleware)
)(createStore);

const reducer = combineReducers({
  reducers,
  routing: routerReducer,
});
export default function configureStore(initialState){
  return finalCreateStore(
    reducer,
    initialState
  );}
