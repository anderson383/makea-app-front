import axios from 'axios';

const axiosIntance = axios.create({
  baseURL: 'http://192.168.0.8:4000/api',
  headers: {
    Accept: 'application/json',
    'Accept-Language': 'es-CO',
    'Content-Language': 'es',
    'Content-Type': 'application/json'
  },
  timeout: 50000
});

export default axiosIntance;
