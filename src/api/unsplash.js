import axios from 'axios';
require('dotenv').config();
const api_key = process.env.REACT_APP_API_KEY;
export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: `Client-ID ${api_key}`,
  },
});
