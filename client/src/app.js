import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/configureStore";
import {Provider} from "react-redux";
import {Router, Route, IndexRoute, browserHistory} from "react-router";
import {syncHistoryWithStore} from 'react-router-redux';
import {App, Home} from './components'
//import { createBrowserHistory } from 'history';//fix react-router 4.x issue
import {Data, Tables} from './containers'
const store = configureStore({});
const history = syncHistoryWithStore(browserHistory, store);
//const history = syncHistoryWithStore(createBrowserHistory(), store); //fix react-router 4.x issue
ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={Home}/>
                <Route path="data/:name" component={Data}/>
                <Route path="tables" component={Tables}/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('app')
);
