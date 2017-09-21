import React from 'react';
import ReactDOM from 'react-dom';
import reduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, browserHistory} from 'react-router';
import Signin from './components/auth/signin';

import App from './components/app';
import reducers from './reducers';

var createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
		<Router history={browserHistory}>
  			<Route path="/" component={App}>
  				<Route path="signin" component={Signin} />
  			</Route>
  		</Router>
  </Provider>
  , document.querySelector('.container'));
