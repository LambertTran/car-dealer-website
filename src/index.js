import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter,Route,Switch} from 'react-router-dom';

/** import components **/
import Home from './components/homepage/homepage';
import Autos from './components/autopage/autopage';
import About from './components/aboutpage/aboutpage';

/** create store **/
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import reducers from './reducers';
const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path='/autos' component={Autos} />
          <Route path='/about' component={About} />
          <Route path='/login' component={() => 
            window.location = 'http://ec2-13-57-125-176.us-west-1.compute.amazonaws.com:8080/'
          }/>
          <Route path='/' component={Home} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)