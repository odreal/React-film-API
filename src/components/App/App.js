import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import HomeContainer from '../Home/HomeContainer';

const url = `https://anilist.co/api/v2/oauth/authorize?client_id=1725&redirect_uri=http://localhost:3000&response_type=code`;

const App = () => (
  <Router>
    <div className="container">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>
      <div className="App">
        <Route exact path="/" component={HomeContainer} />
        <a href={url}>Login Anilist</a>
      </div>
    </div>
  </Router>
);

export default App;
