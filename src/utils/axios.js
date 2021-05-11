import axios from 'axios'
import errorHandle from './error'

class HttpRequest {
  constructor (baseUrl) {
    this.baseUrl = baseUrl
  }

  getInstanceConfig () {
    const config = {
      baseURL: this.baseUrl,
      timeout: 1000,
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      }
    }
    return config
  }

  // 拦截器
  interceptors (instance) {
    // 添加请求拦截器
    instance.interceptors.request.use((config) => {
      // 在发送请求之前做些什么
      // console.log('testconfig' + JSON.stringify(config))
      return config
    }, function (error) {
      // 对请求错误做些什么
      errorHandle(error)
      return Promise.reject(error)
    })

    // 添加响应拦截器
    instance.interceptors.response.use((resp) => {
      // 对响应数据做点什么
      if (resp.status === 200) {
        return resp.data
      } else {
        return Promise.reject(resp)
      }
    }, function (error) {
      // 对响应错误做点什么
      errorHandle(error)
      return Promise.reject(error)
    })
  }

  // 创建实例
  request (options) {
    const instance = axios.create()
    const newOptions = Object.assign(this.getInstanceConfig(), options)
    this.interceptors(instance)
    return instance(newOptions)
  }

  // get 请求
  get (url, config) {
    const options = Object.assign({
      method: 'get',
      url: url
    }, config)
    return this.request(options)
  }

  // post 请求
  post (url, data) {
    return this.request({
      method: 'post',
      url: url,
      data: data
    })
  }
}
export default HttpRequest

/* const instance = axios.create({
  baseURL: process.env.NODE_ENV === 'development' ? axiosConfig.baseUrl.dev : axiosConfig.baseUrl.production,
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json;charset=utf-8'
  }
})

// 添加请求拦截器
instance.interceptors.request.use((config) => {
  // 在发送请求之前做些什么
  console.log('testconfig' + JSON.stringify(config))
  return config
}, function (error) {
  // 对请求错误做些什么
  errorHandle(error)
  return Promise.reject(error)
})

// 添加响应拦截器
instance.interceptors.response.use((resp) => {
  // 对响应数据做点什么
  if (resp.status === 200) {
    return resp.data
  } else {
    return Promise.reject(resp)
  }
}, function (error) {
  // 对响应错误做点什么
  errorHandle(error)
  return Promise.reject(error)
})

export default instance
*/
