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
import NavDesktop from '../Nav/NavDesktop';
import NavHeaderMobile from '../Nav/NavHeaderMobile';
import NavFooterMobile from '../Nav/NavFooterMobile';
import Catalog from '../Catalog/Catalog';
import Category from '../Catalog/Category';

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
