import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import PostsIndex from './components/posts-index';
import promise from 'redux-promise';
import NewPost from './components/post-new';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);




ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/NewPost" component={NewPost}/>
            <Route path="/" component={PostsIndex}/>
          </Switch>
        </div>
      </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
