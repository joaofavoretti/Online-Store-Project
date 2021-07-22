import axios, { AxiosInstance } from 'axios';

/* Main Api instance. Use to make HTTP requests (POST, GET, HEAD, DELETE) */
const Api: AxiosInstance = axios.create({
  baseURL: process.env.VUE_APP_API
});

export default Api;
