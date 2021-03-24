import { createBrowserHistory } from 'history';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import * as handlers from './handlers';

export default class Config extends Component {
  constructor(properties) {
    super(properties);
    this.customHistory = createBrowserHistory();
  }

  render() {
    const { children } = this.props;
    return (
      <Fragment>
        <Router history={this.customHistory}>
          {children}

          <Switch>
            {Object.values(handlers).map(Handler => (
              <Route key={nanoid()} {...new Handler()} />
            ))}
          </Switch>
        </Router>
      </Fragment>
    );
  }
}
Config.propTypes = {
  children: PropTypes.element.isRequired
};
