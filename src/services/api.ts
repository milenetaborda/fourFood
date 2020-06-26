import axios from 'axios';

const api = axios.create({
  baseURL: 'https://us-central1-missao-newton.cloudfunctions.net',
});

export default api;
