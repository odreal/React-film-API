import React, { Component } from 'react';
import Film from './Film';
import { apiUrl } from '../../constants/config';

class FilmContainer extends Component {
	state = {
      data: null,
    };
	componentDidMount() {
		const { match: { params } } = this.props;
		fetch(apiUrl('i='+params.itemId))
			.then(response => response.json())
			.then(data => this.setState({ data }));
	}
  render() {
    return <Film data={this.state.data}/>;
  }
}

export default FilmContainer;