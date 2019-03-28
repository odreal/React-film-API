import React, { Component } from 'react';
import queryString from 'query-string';
import api from '../../helpers/api';
import Home from './Home';

class HomeContainer extends Component {
  render() {
    return <Home />;
  }
}

export default HomeContainer;
