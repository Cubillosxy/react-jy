import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import 'bootstrap/dist/css/bootstrap.css';
import App from './App';
import LineGraph from "./components/LineGraphs";
import Users from "./components/Users";
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route } from "react-router-dom";

//ReactDOM.render(<LineGraph />, document.getElementById('root'));
ReactDOM.render(
    <Router>
    <div>
      <Route exact path="/">
        <App />
      </Route>
      <Route path="/graph">
        <LineGraph />
      </Route>
        <Route path="/users-posts">
        <Users />
      </Route>
    </div>
  </Router>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
