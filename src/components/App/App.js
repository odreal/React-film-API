import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { StyledLink, NavApp, NavUl, NavLi } from './App.styles.js';
import HomeContainer from '../Home/HomeContainer';
import FilmContainer from '../Film/FilmContainer';
import { Global, css } from '@emotion/core'

const App = () => (
  <Router>
    <div className="container">
	<Global
		styles={css`
		@import url('https://fonts.googleapis.com/css?family=Open+Sans');
			body {
			font-family: 'Open Sans', sans-serif;
			background: #f5f5f5;
			margin: 0;
			}
		`}
	/>
      <NavApp>
        <NavUl>
          <NavLi>
            <StyledLink to="/">Rechercher un nouveau film</StyledLink>
          </NavLi>
        </NavUl>
      </NavApp>
      <div className="App">
        <Route exact path="/" component={HomeContainer} />
		<Route exact path="/show/:itemId" component={FilmContainer} />
      </div>
    </div>
  </Router>
);

export default App;
