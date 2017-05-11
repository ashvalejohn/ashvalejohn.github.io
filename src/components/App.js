import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../style/style.css';

import Nav from './Nav';
import Onboarding from './Onboarding';
import PayingForCare from './PayingForCare';
import TalkingAboutCare from './TalkingAboutCare';
import TypesOfCare from './TypesOfCare';
import Welcome from './Welcome';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app-container">
          <Route
            exact
            path='/'
            component={Welcome}>
          </Route>

          <Route
            path='/getting-started'
            component={Onboarding}>
          </Route>

          <Route
            path='/common-questions'
            component={Nav}>
          </Route>

          <Route
            path='/types-of-care/:level'
            component={TypesOfCare}>
          </Route>

          <Route
            path='/talking-about-care/:level'
            component={TalkingAboutCare}>
          </Route>

          <Route
            path='/paying-for-care/:level'
            component={PayingForCare}>
          </Route>

        </div>
      </Router>
    );
  }
}

export default App;
