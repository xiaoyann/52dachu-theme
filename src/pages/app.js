// application's entry

import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';
import reducers from 'reducers/index';
import '../css/common.scss';
import '../css/prism.scss';

// components
import Header from 'components/Header';

// pages
import Home from './home';
import Article from './article';


class Application extends Component {
  render() {
    return (
      <div> 
        <Header></Header>
        <div className="container clearfix">
          {this.props.children}
          <div className="sidebar"></div>
        </div>
      </div>
    );
  }
}

const store = createStore(reducers, {}, applyMiddleware(thunk));

render((
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Application}>
        <IndexRoute component={Home}/>
        <Route path="/article" component={Article}></Route>
      </Route>
    </Router>
  </Provider>
), document.getElementById('app'));

