import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
  useParams,
} from 'react-router-dom';
import ReviewModule from './ReviewModule.jsx';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <Redirect to="/products/1" />
      </Route>
      <Route path="/products/:productId">
        <ReviewModule />
      </Route>
    </Switch>
  </Router>
);

ReactDOM.render(<App />, document.getElementById('review-module'));
