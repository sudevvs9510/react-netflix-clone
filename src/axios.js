import axios from 'axios';
import {baseUrl} from './Constants/Constants.js'

const instance = axios.create({
   baseURL: baseUrl,
})

export default instance;