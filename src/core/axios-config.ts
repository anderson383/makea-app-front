import axios from 'axios';

const axiosIntance = axios.create({
  baseURL: 'https://makea-backend-production.up.railway.app/api',
  headers: {
    Accept: 'application/json',
    'Accept-Language': 'es-CO',
    'Content-Language': 'es',
    'Content-Type': 'application/json'
  },
  timeout: 50000
});

export default axiosIntance;
