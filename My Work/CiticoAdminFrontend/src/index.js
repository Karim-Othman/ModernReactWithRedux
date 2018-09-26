import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import 'bootstrap';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import NavigationBar from './components/navigation-bar';
import CategoriesContainer from './components/categories-container';
import PackagesContainer from './components/packages-container';
import Wellcome from './components/wellcome';
import Orders from './components/orders';
import Footer from './components/footer';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
      <BrowserRouter>
        <div>
          <NavigationBar/>
          <Switch>
            <Route path="/categories" component={CategoriesContainer}/>
            <Route path="/packages" component={PackagesContainer}/>
            <Route path="/orders" component={Orders}/>
            <Route path="/" component={Wellcome}/>
          </Switch>
          <Footer/>
        </div>
      </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
