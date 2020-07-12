import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Provider } from 'react-redux';
import store from '../../store';
import '../../main.scss';
import Home from '../Home/Home';
import NavDesktop from '../nav/NavDesktop';
import NavHeaderMobile from '../nav/NavHeaderMobile';
import NavFooterMobile from '../nav/NavFooterMobile';
import Catalog from '../Catalog/Catalog';
import Category from '../Catalog/Category';
import Login from '../Auth/Login/Login';
import Signup from '../Auth/Signup/Signup';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <NavDesktop />
        <NavHeaderMobile />

        <div className="body">
          <Switch>
            <Route
              path="/catalog/:category"
              component={Category}
            />
            <Route path="/catalog">
              <Catalog />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>

        <NavFooterMobile />
      </Router>
    </Provider>
  );
}

export default App;
