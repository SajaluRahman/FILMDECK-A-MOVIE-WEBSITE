import  axios from 'axios'
import {baseUrl} from '../Constents/Constents'
const instance = axios.create({
    baseURL: baseUrl,
    
  });
  export default instance