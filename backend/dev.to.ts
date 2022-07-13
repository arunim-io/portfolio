import axios from 'axios';

const devToClient = axios.create({
  baseURL: 'https://dev.to/api',
  headers: {
    'Content-Type': 'application/json',
    'api-key': import.meta.env.DEV_API_KEY,
  },
});

export default devToClient;
