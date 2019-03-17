/* eslint-disable */
const express = require('express');
const request = require('request');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const app = express();

app.use(cors());
app.use(cookieParser());
app.set('port',  4000);

const authUrl = `https://anilist.co/api/v2/oauth/token`;

app.get('/api/set-token', (req, res) => {
  const parsed = req.query;
  const options = {
    uri: authUrl,
    withCredentials: true,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    json: {
      'grant_type': 'authorization_code',
      'client_id': '1725',
      'client_secret': '6iW8dnnx0cdZ8ub4HJz0ZBU5cm9fZbdqgFPHjhSy',
      'redirect_uri': 'http://localhost:3000',
      'code': parsed.code,
    },
  };

  request(options, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      res.send({ token: body.access_token, expire: body.expires_in + Date.now() });
    }
  });
});

app.listen(4000, () => {
  console.log('Server running on port 4000');
});
