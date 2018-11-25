import React from 'react';
import { BrowserRouter as Router, Route, } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

import Navigation from '../Navigation';
import LandingPage from '../Landing';
import RegisterView from '../Register';
import SignInPage from '../SignIn';
import PasswordForgetPage from '../PasswordForget';
import HomePage from '../Home';
import AccountPage from '../Account';
import AdminPage from '../Admin';

const App = () =>
  <div>
    <h1>App</h1>
    <Router>
      <div>
        <Navigation />
        <Route exact path={ROUTES.ROOT} component={LandingPage} />
        <Route exact path={ROUTES.REGISTER} component={RegisterView} />
        <Route exact path={ROUTES.LOGIN} component={SignInPage} />
        <Route exact path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
        <Route exact path={ROUTES.HOME} component={HomePage} />
        <Route exact path={ROUTES.ACCOUNT} component={AccountPage} />
        <Route exact path={ROUTES.ADMIN} component={AdminPage} />
      </div>
    </Router>
  </div>

export default App;
