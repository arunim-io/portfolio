import axios from 'axios';

const devToClient = axios.create({
  baseURL: 'https://dev.to/api',
  headers: {
    'Content-Type': 'application/json',
    'api-key': process.env.DEV_API_KEY as string,
  },
});

export default devToClient;
