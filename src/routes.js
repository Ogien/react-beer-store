import React,{Component} from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import App from './Components/App';
import Store from './Components/store-page/Store';
import CreateProduct from './Components/store-page/Store-Create-Modal';

export default () => (
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Store}/>
        </Route>
    </Router>
);

// <Route path="create" component={CreateProduct}/>