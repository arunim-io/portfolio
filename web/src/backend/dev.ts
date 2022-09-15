import axios from 'axios';

const devClient = axios.create({
  baseURL: 'https://dev.to/api',
  headers: {
    'Content-Type': 'application/json',
    'api-key': import.meta.env.DEV_API_KEY,
  },
});

export default devClient;
