import React, { Component } from 'react';
import queryString from 'query-string';
import api from '../../helpers/api';
import Home from './Home';

class HomeContainer extends Component {
  state = {
    loggedIn: false,
  };

  async componentDidMount() {
    const parsed = queryString.parse(window.location.search);
    const hasCredentials = localStorage.getItem('credentials');

    if (hasCredentials) {
      this.setState({ loggedIn: true });
      // call api.getUser(token) and sent back token to server to use it
    };

    const stuff = await api.setToken(parsed.code);
    console.log(stuff);
  }

  componentDidUpdate() {
    console.log('updated');
  }

  render() {
    const { loggedIn } = this.state;
    return <Home loggedIn={loggedIn} />;
  }
}

export default HomeContainer;
