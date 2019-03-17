import React from 'react';

const Home = ({ loggedIn }) => (
  <div className="home">
    <h2>Navigate through your application</h2>
    <p>{loggedIn ? 'Connected' : 'You need to logged in'}</p>
  </div>
);

export default Home;
