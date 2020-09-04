import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HomePage from './pages/home';
import DashboardPage from './components/dashboard';

const App = () => {
  return (
    <div className='container'>
      <div className='jumbotron'>
        <Router>
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/dashboard' component={DashboardPage} />
          </Switch>
        </Router>
      </div>
    </div>
  );
};

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
