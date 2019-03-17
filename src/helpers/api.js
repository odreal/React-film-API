import axios from 'axios';

class api {
  constructor() {
    this.baseUrl = 'http://localhost:4000/api';
  }
  async setToken(code) {
    const data = await axios({
      method: 'GET',
      url: `${this.baseUrl}/set-token?code=${code}`,
    }).then(res => {
      localStorage.setItem('credentials', JSON.stringify(res.data));
    }).catch(err => {
      return err;
    });
    return data;
  }

  async getData() {

  }
}

export default new api();