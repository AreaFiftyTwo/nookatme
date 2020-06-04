import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store';
import './main.scss';
import Home from './components/pages/Home';
import NavDesktop from './components/nav/NavDesktop';
import NavHeaderMobile from './components/nav/NavHeaderMobile';
import NavFooterMobile from './components/nav/NavFooterMobile';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <NavDesktop />
        <NavHeaderMobile />

        <div className="body">
          <Switch>
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
