import { Config } from 'config/routes';
import * as handlers from 'config/routes/handlers';
import { nanoid } from 'nanoid';
import React, { Component, StrictMode } from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';

export default class App extends Component {
  render() {
    return (
      <StrictMode>
        <Config>
          <nav>
            <ul>
              {Object.values(handlers).map(Handler => {
                const handler = new Handler();

                return (
                  <li key={nanoid()}>
                    <Link to={handler.path}>{handler.name}</Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </Config>
      </StrictMode>
    );
  }
}

App.propTypes = {};
