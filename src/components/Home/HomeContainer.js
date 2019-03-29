import React, { Component, createRef } from 'react';
import Home from './Home';
import { apiUrl } from '../../constants/config';

class HomeContainer extends Component {
	state = {
      data: null,
    };
	searchInput = createRef();
	submitForm = (e) => {
    e.preventDefault();
	fetch(apiUrl('s='+this.searchInput.current.value))
		.then(response => response.json())
		.then(data => this.setState({ data }))
	}
  render() {
    return <Home data={this.state.data} searchInput={this.searchInput} submitValue={this.submitForm} />;
  }
}

export default HomeContainer;