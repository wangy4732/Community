import HttpRequest from './axios'
import axiosConfig from '../config/axios_config'

const baseUrl = process.env.NODE_ENV === 'development' ? axiosConfig.baseUrl.dev : axiosConfig.baseUrl.production

const axios = new HttpRequest(baseUrl)

export default axios
